from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceinventory


@dataclass_json
@dataclass
class ListResourceInventoryResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_inventory_list: Optional[List[resourceinventory.ResourceInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceInventoryList' }})
    
