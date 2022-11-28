from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationSummary:
    r"""ApplicationSummary
    Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
    """
    
    application_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_status: ApplicationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    runtime_environment: RuntimeEnvironmentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironment') }})
    application_mode: Optional[ApplicationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMode') }})
    
