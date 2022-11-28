from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PickupStep:
    r"""PickupStep
    This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The pickupStep container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.
    """
    
    merchant_location_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantLocationKey') }})
    
