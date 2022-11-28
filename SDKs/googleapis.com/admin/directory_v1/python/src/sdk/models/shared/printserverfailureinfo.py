from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PrintServerFailureInfoErrorCodeEnum(str, Enum):
    OK = "OK"
    CANCELLED = "CANCELLED"
    UNKNOWN = "UNKNOWN"
    INVALID_ARGUMENT = "INVALID_ARGUMENT"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"
    NOT_FOUND = "NOT_FOUND"
    ALREADY_EXISTS = "ALREADY_EXISTS"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    UNAUTHENTICATED = "UNAUTHENTICATED"
    RESOURCE_EXHAUSTED = "RESOURCE_EXHAUSTED"
    FAILED_PRECONDITION = "FAILED_PRECONDITION"
    ABORTED = "ABORTED"
    OUT_OF_RANGE = "OUT_OF_RANGE"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    INTERNAL = "INTERNAL"
    UNAVAILABLE = "UNAVAILABLE"
    DATA_LOSS = "DATA_LOSS"


@dataclass_json
@dataclass
class PrintServerFailureInfo:
    r"""PrintServerFailureInfo
    Info about failures
    """
    
    error_code: Optional[PrintServerFailureInfoErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    print_server: Optional[PrintServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printServer') }})
    print_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printServerId') }})
    
