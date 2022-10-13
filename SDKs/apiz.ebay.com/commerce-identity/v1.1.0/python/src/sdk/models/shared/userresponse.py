from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import businessaccount
from . import individualaccount


@dataclass_json
@dataclass
class UserResponse:
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    business_account: Optional[businessaccount.BusinessAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessAccount' }})
    individual_account: Optional[individualaccount.IndividualAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individualAccount' }})
    registration_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationMarketplaceId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
