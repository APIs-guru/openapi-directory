from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IndividualAccount:
    r"""IndividualAccount
    The type that defines the fields for the information of an individual account.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    primary_phone: Optional[Phone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    registration_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationAddress') }})
    secondary_phone: Optional[Phone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryPhone') }})
    
