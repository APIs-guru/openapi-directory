from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import inventoryfilter


@dataclass_json
@dataclass
class InventoryGroup:
    filters: List[inventoryfilter.InventoryFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
