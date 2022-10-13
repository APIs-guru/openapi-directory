from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import inventoryattributedatatype_enum


@dataclass_json
@dataclass
class InventoryItemAttribute:
    data_type: inventoryattributedatatype_enum.InventoryAttributeDataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
