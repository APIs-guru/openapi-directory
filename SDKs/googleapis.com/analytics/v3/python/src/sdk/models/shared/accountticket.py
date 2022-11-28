from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountTicketInput:
    r"""AccountTicketInput
    JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
    """
    
    account: Optional[Account1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile: Optional[ProfileInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    webproperty: Optional[WebpropertyInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webproperty') }})
    

@dataclass_json
@dataclass
class AccountTicket:
    r"""AccountTicket
    JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
    """
    
    account: Optional[Account] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile: Optional[Profile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    webproperty: Optional[Webproperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webproperty') }})
    
