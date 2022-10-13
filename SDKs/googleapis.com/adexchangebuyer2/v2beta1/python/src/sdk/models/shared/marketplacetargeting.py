from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import criteriatargeting
from . import inventorysizetargeting
from . import placementtargeting
from . import technologytargeting
from . import videotargeting


@dataclass_json
@dataclass
class MarketplaceTargeting:
    geo_targeting: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoTargeting' }})
    inventory_size_targeting: Optional[inventorysizetargeting.InventorySizeTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySizeTargeting' }})
    placement_targeting: Optional[placementtargeting.PlacementTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementTargeting' }})
    technology_targeting: Optional[technologytargeting.TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technologyTargeting' }})
    video_targeting: Optional[videotargeting.VideoTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoTargeting' }})
    
