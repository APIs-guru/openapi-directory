from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EligibleItem:
    r"""EligibleItem
    A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API.
    """
    
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingId') }})
    
