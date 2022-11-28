from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BusinessAccount:
    r"""BusinessAccount
    The type that defines the fields for the business account information.
    """
    
    address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    doing_business_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doingBusinessAs') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_contact: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContact') }})
    primary_phone: Optional[Phone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    secondary_phone: Optional[Phone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryPhone') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
