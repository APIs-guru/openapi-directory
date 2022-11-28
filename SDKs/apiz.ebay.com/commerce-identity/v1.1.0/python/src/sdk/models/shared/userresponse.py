from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserResponse:
    r"""UserResponse
    The type that defines the fields for the getUser method.
    """
    
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    business_account: Optional[BusinessAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessAccount') }})
    individual_account: Optional[IndividualAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualAccount') }})
    registration_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationMarketplaceId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
