from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class InventoryTypeTargetingInventoryTypesEnum(str, Enum):
    INVENTORY_TYPE_UNSPECIFIED = "INVENTORY_TYPE_UNSPECIFIED"
    BROWSER = "BROWSER"
    MOBILE_APP = "MOBILE_APP"
    VIDEO_PLAYER = "VIDEO_PLAYER"


@dataclass_json
@dataclass
class InventoryTypeTargeting:
    inventory_types: Optional[List[InventoryTypeTargetingInventoryTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryTypes' }})
    
