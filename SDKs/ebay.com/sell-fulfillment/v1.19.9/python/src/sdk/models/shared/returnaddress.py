from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnAddress:
    r"""ReturnAddress
    This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
    """
    
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine1') }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine2') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    primary_phone: Optional[Phone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    state_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateOrProvince') }})
    
