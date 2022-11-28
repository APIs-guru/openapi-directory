from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaxAddress:
    r"""TaxAddress
    This container consists of address information that can be used by sellers for tax purpose.
    """
    
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    state_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateOrProvince') }})
    
