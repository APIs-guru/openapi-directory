from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import applicationconfigurationdescription
from . import applicationmaintenanceconfigurationdescription
from . import applicationmode_enum
from . import applicationstatus_enum
from . import cloudwatchloggingoptiondescription
from . import runtimeenvironment_enum


@dataclass_json
@dataclass
class ApplicationDetail:
    application_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_configuration_description: Optional[applicationconfigurationdescription.ApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationConfigurationDescription' }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationDescription' }})
    application_maintenance_configuration_description: Optional[applicationmaintenanceconfigurationdescription.ApplicationMaintenanceConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMaintenanceConfigurationDescription' }})
    application_mode: Optional[applicationmode_enum.ApplicationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMode' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    application_status: applicationstatus_enum.ApplicationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationStatus' }})
    application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    application_version_rolled_back_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionRolledBackFrom' }})
    application_version_rolled_back_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionRolledBackTo' }})
    application_version_updated_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionUpdatedFrom' }})
    cloud_watch_logging_option_descriptions: Optional[List[cloudwatchloggingoptiondescription.CloudWatchLoggingOptionDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionDescriptions' }})
    conditional_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalToken' }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    runtime_environment: runtimeenvironment_enum.RuntimeEnvironmentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeEnvironment' }})
    service_execution_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceExecutionRole' }})
    
