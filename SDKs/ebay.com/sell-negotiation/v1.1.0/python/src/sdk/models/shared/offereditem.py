from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OfferedItem:
    r"""OfferedItem
    A complex type that defines the offer being made to an &quot;interested&quot; buyer.
    """
    
    discount_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingId') }})
    price: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
