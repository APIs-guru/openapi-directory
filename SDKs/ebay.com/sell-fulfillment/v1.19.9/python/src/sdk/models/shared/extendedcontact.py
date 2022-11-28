from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtendedContact:
    r"""ExtendedContact
    This type contains shipping and contact information for a buyer or an eBay shipping partner.
    """
    
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    contact_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactAddress') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    primary_phone: Optional[PhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    
