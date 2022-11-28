from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    The Amazon Managed Workflows for Apache Airflow (MWAA) environment.
    """
    
    airflow_configuration_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AirflowConfigurationOptions') }})
    airflow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AirflowVersion') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dag_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagS3Path') }})
    environment_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentClass') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKey') }})
    last_update: Optional[LastUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdate') }})
    logging_configuration: Optional[LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingConfiguration') }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxWorkers') }})
    min_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinWorkers') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfiguration') }})
    plugins_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PluginsS3ObjectVersion') }})
    plugins_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PluginsS3Path') }})
    requirements_s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequirementsS3ObjectVersion') }})
    requirements_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequirementsS3Path') }})
    schedulers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedulers') }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRoleArn') }})
    source_bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBucketArn') }})
    status: Optional[EnvironmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    webserver_access_mode: Optional[WebserverAccessModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebserverAccessMode') }})
    webserver_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebserverUrl') }})
    weekly_maintenance_window_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceWindowStart') }})
    
