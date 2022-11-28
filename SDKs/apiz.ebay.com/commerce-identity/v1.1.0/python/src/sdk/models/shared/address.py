from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Address:
    r"""Address
    The type that defines the fields for an address.
    """
    
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine1') }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine2') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    state_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateOrProvince') }})
    
