from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lastupdate
from . import loggingconfiguration
from . import networkconfiguration
from . import environmentstatus_enum
from . import webserveraccessmode_enum


@dataclass_json
@dataclass
class Environment:
    airflow_configuration_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirflowConfigurationOptions' }})
    airflow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirflowVersion' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dag_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagS3Path' }})
    environment_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentClass' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKey' }})
    last_update: Optional[lastupdate.LastUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdate' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfiguration' }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWorkers' }})
    min_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinWorkers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfiguration' }})
    plugins_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginsS3ObjectVersion' }})
    plugins_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginsS3Path' }})
    requirements_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequirementsS3ObjectVersion' }})
    requirements_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequirementsS3Path' }})
    schedulers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedulers' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRoleArn' }})
    source_bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBucketArn' }})
    status: Optional[environmentstatus_enum.EnvironmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    webserver_access_mode: Optional[webserveraccessmode_enum.WebserverAccessModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebserverAccessMode' }})
    webserver_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebserverUrl' }})
    weekly_maintenance_window_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceWindowStart' }})
    
