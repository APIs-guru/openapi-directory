from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DetailScopeEnum(str, Enum):
    PARAMETER = "Parameter"
    REPORT = "Report"
    ITEM = "Item"


@dataclass_json
@dataclass
class Detail:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    scope: Optional[DetailScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
