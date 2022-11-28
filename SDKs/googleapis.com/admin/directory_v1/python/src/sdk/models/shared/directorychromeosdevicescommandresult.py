from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DirectoryChromeosdevicesCommandResultResultEnum(str, Enum):
    COMMAND_RESULT_TYPE_UNSPECIFIED = "COMMAND_RESULT_TYPE_UNSPECIFIED"
    IGNORED = "IGNORED"
    FAILURE = "FAILURE"
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclass
class DirectoryChromeosdevicesCommandResult:
    r"""DirectoryChromeosdevicesCommandResult
    The result of executing a command.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executeTime') }})
    result: Optional[DirectoryChromeosdevicesCommandResultResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
