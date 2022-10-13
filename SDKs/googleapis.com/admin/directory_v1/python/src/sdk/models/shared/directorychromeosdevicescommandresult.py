from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DirectoryChromeosdevicesCommandResultResultEnum(str, Enum):
    COMMAND_RESULT_TYPE_UNSPECIFIED = "COMMAND_RESULT_TYPE_UNSPECIFIED"
    IGNORED = "IGNORED"
    FAILURE = "FAILURE"
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclass
class DirectoryChromeosdevicesCommandResult:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executeTime' }})
    result: Optional[DirectoryChromeosdevicesCommandResultResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
