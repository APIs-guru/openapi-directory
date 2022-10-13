from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import detailederrorcode_enum


@dataclass_json
@dataclass
class DetailedError:
    code: detailederrorcode_enum.DetailedErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
