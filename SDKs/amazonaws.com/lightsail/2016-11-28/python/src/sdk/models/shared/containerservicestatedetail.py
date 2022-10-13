from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import containerservicestatedetailcode_enum


@dataclass_json
@dataclass
class ContainerServiceStateDetail:
    code: Optional[containerservicestatedetailcode_enum.ContainerServiceStateDetailCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
