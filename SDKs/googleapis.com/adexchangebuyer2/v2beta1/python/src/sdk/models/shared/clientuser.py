from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClientUserStatusEnum(str, Enum):
    USER_STATUS_UNSPECIFIED = "USER_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class ClientUser:
    r"""ClientUser
    A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.
    """
    
    client_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientAccountId') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    status: Optional[ClientUserStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
