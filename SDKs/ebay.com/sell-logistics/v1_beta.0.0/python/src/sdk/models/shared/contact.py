from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Contact:
    r"""Contact
    This complex type contains contact information for an individual buyer or seller.
    """
    
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    contact_address: Optional[ContactAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactAddress') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    primary_phone: Optional[PhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    
