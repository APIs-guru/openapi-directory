from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ErrorHandlerErrorCodeEnum(str, Enum):
    ERROR_CODE_UNSPECIFIED = "ERROR_CODE_UNSPECIFIED"
    ERROR_CODE_DEFAULT = "ERROR_CODE_DEFAULT"
    ERROR_CODE_OVER_QUOTA = "ERROR_CODE_OVER_QUOTA"
    ERROR_CODE_DOS_API_DENIAL = "ERROR_CODE_DOS_API_DENIAL"
    ERROR_CODE_TIMEOUT = "ERROR_CODE_TIMEOUT"


@dataclass_json
@dataclass
class ErrorHandler:
    error_code: Optional[ErrorHandlerErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    static_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticFile' }})
    
