from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryresultentity


@dataclass_json
@dataclass
class GetInventoryResult:
    entities: Optional[List[inventoryresultentity.InventoryResultEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
