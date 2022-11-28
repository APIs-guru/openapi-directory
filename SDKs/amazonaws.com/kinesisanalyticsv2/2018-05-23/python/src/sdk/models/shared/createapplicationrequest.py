from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateApplicationRequest:
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    runtime_environment: RuntimeEnvironmentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironment') }})
    service_execution_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceExecutionRole') }})
    application_configuration: Optional[ApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationConfiguration') }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDescription') }})
    application_mode: Optional[ApplicationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMode') }})
    cloud_watch_logging_options: Optional[List[CloudWatchLoggingOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
