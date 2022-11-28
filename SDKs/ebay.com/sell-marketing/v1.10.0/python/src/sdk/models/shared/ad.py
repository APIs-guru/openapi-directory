from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Ad:
    r"""Ad
    This type defines the fields for an ad.
    """
    
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adId') }})
    bid_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentage') }})
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceId') }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceType') }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingId') }})
    
