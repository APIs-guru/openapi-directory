from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MarketplaceTargeting:
    r"""MarketplaceTargeting
    Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
    """
    
    geo_targeting: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    inventory_size_targeting: Optional[InventorySizeTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySizeTargeting') }})
    placement_targeting: Optional[PlacementTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementTargeting') }})
    technology_targeting: Optional[TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    video_targeting: Optional[VideoTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoTargeting') }})
    
