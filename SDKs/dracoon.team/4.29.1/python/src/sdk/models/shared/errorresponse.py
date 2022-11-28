from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorResponse:
    r"""ErrorResponse
    Error information
    """
    
    code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugInfo') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    
