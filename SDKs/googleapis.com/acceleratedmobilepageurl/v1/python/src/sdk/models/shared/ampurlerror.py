from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AmpURLErrorErrorCodeEnum(str, Enum):
    ERROR_CODE_UNSPECIFIED = "ERROR_CODE_UNSPECIFIED"
    INPUT_URL_NOT_FOUND = "INPUT_URL_NOT_FOUND"
    NO_AMP_URL = "NO_AMP_URL"
    APPLICATION_ERROR = "APPLICATION_ERROR"
    URL_IS_VALID_AMP = "URL_IS_VALID_AMP"
    URL_IS_INVALID_AMP = "URL_IS_INVALID_AMP"


@dataclass_json
@dataclass
class AmpURLError:
    error_code: Optional[AmpURLErrorErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    original_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalUrl' }})
    
