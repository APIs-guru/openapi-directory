from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import errorcode_enum
from . import detailederror


@dataclass_json
@dataclass
class ErrorDetails:
    code: errorcode_enum.ErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    details: Optional[List[detailederror.DetailedError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
