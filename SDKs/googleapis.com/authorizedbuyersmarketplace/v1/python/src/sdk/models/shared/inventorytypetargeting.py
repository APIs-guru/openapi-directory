from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InventoryTypeTargetingInventoryTypesEnum(str, Enum):
    INVENTORY_TYPE_UNSPECIFIED = "INVENTORY_TYPE_UNSPECIFIED"
    BROWSER = "BROWSER"
    MOBILE_APP = "MOBILE_APP"
    VIDEO_PLAYER = "VIDEO_PLAYER"


@dataclass_json
@dataclass
class InventoryTypeTargeting:
    r"""InventoryTypeTargeting
    Targeting of the inventory types a bid request can originate from.
    """
    
    inventory_types: Optional[List[InventoryTypeTargetingInventoryTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryTypes') }})
    
