from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryaggregator
from . import inventorygroup


@dataclass_json
@dataclass
class InventoryAggregator:
    aggregators: Optional[List[inventoryaggregator.InventoryAggregator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aggregators' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    groups: Optional[List[inventorygroup.InventoryGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    
