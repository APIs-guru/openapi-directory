from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import inventoryitem


@dataclass_json
@dataclass
class PutInventoryRequest:
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    items: List[inventoryitem.InventoryItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    
