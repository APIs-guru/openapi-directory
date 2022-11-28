from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClientUserStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    INVITED = "INVITED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class ClientUser:
    r"""ClientUser
    A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[ClientUserStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class ClientUserInput:
    r"""ClientUserInput
    A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    
