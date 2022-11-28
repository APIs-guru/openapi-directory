from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorHandlerErrorCodeEnum(str, Enum):
    ERROR_CODE_UNSPECIFIED = "ERROR_CODE_UNSPECIFIED"
    ERROR_CODE_DEFAULT = "ERROR_CODE_DEFAULT"
    ERROR_CODE_OVER_QUOTA = "ERROR_CODE_OVER_QUOTA"
    ERROR_CODE_DOS_API_DENIAL = "ERROR_CODE_DOS_API_DENIAL"
    ERROR_CODE_TIMEOUT = "ERROR_CODE_TIMEOUT"


@dataclass_json
@dataclass
class ErrorHandler:
    r"""ErrorHandler
    Custom static error page to be served when an error occurs.
    """
    
    error_code: Optional[ErrorHandlerErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    static_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticFile') }})
    
