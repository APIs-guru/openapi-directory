from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationDetail:
    r"""ApplicationDetail
    Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
    """
    
    application_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_status: ApplicationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    runtime_environment: RuntimeEnvironmentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironment') }})
    application_configuration_description: Optional[ApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationConfigurationDescription') }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDescription') }})
    application_maintenance_configuration_description: Optional[ApplicationMaintenanceConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceConfigurationDescription') }})
    application_mode: Optional[ApplicationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMode') }})
    application_version_rolled_back_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionRolledBackFrom') }})
    application_version_rolled_back_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionRolledBackTo') }})
    application_version_updated_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionUpdatedFrom') }})
    cloud_watch_logging_option_descriptions: Optional[List[CloudWatchLoggingOptionDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionDescriptions') }})
    conditional_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalToken') }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_execution_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceExecutionRole') }})
    
