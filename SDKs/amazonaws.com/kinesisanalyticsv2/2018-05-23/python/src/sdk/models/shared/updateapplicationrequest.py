from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateApplicationRequest:
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_configuration_update: Optional[ApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationConfigurationUpdate') }})
    cloud_watch_logging_option_updates: Optional[List[CloudWatchLoggingOptionUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionUpdates') }})
    conditional_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalToken') }})
    current_application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    run_configuration_update: Optional[RunConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfigurationUpdate') }})
    service_execution_role_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceExecutionRoleUpdate') }})
    
