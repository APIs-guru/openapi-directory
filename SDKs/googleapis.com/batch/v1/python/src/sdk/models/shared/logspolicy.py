from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LogsPolicyDestinationEnum(str, Enum):
    DESTINATION_UNSPECIFIED = "DESTINATION_UNSPECIFIED"
    CLOUD_LOGGING = "CLOUD_LOGGING"
    PATH = "PATH"


@dataclass_json
@dataclass
class LogsPolicy:
    r"""LogsPolicy
    LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
    """
    
    destination: Optional[LogsPolicyDestinationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    logs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsPath') }})
    
