from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dayparttargeting
from . import criteriatargeting
from . import inventorysizetargeting
from . import inventorytypetargeting
from . import placementtargeting
from . import technologytargeting
from . import criteriatargeting
from . import videotargeting


@dataclass_json
@dataclass
class MarketplaceTargeting:
    daypart_targeting: Optional[dayparttargeting.DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daypartTargeting' }})
    geo_targeting: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoTargeting' }})
    inventory_size_targeting: Optional[inventorysizetargeting.InventorySizeTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySizeTargeting' }})
    inventory_type_targeting: Optional[inventorytypetargeting.InventoryTypeTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryTypeTargeting' }})
    placement_targeting: Optional[placementtargeting.PlacementTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementTargeting' }})
    technology_targeting: Optional[technologytargeting.TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technologyTargeting' }})
    user_list_targeting: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userListTargeting' }})
    video_targeting: Optional[videotargeting.VideoTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoTargeting' }})
    
