from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class Error:
    error: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: ErrorStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
