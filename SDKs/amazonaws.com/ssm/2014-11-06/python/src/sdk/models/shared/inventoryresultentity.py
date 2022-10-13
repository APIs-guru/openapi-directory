from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inventoryresultitem


@dataclass_json
@dataclass
class InventoryResultEntity:
    data: Optional[dict[str, inventoryresultitem.InventoryResultItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    
