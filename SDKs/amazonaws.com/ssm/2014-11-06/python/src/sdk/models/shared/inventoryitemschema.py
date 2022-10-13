from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryitemattribute


@dataclass_json
@dataclass
class InventoryItemSchema:
    attributes: List[inventoryitemattribute.InventoryItemAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
