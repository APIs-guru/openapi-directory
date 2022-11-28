from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MarketplaceTargeting:
    r"""MarketplaceTargeting
    Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
    """
    
    daypart_targeting: Optional[DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daypartTargeting') }})
    geo_targeting: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    inventory_size_targeting: Optional[InventorySizeTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySizeTargeting') }})
    inventory_type_targeting: Optional[InventoryTypeTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryTypeTargeting') }})
    placement_targeting: Optional[PlacementTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementTargeting') }})
    technology_targeting: Optional[TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    user_list_targeting: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userListTargeting') }})
    video_targeting: Optional[VideoTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoTargeting') }})
    
