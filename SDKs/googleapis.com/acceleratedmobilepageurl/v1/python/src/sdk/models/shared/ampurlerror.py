from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""AmpURLError
    AMP URL Error resource for a requested URL that couldn't be found.
    """
    
    error_code: Optional[AmpURLErrorErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    original_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalUrl') }})
    
