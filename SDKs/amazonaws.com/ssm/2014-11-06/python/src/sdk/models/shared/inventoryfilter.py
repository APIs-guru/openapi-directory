from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inventoryqueryoperatortype_enum


@dataclass_json
@dataclass
class InventoryFilter:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    type: Optional[inventoryqueryoperatortype_enum.InventoryQueryOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
