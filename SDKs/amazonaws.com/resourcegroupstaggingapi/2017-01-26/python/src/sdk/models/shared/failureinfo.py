from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errorcode_enum


@dataclass_json
@dataclass
class FailureInfo:
    error_code: Optional[errorcode_enum.ErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    
