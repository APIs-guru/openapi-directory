from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import account
from . import profile
from . import webproperty


@dataclass_json
@dataclass
class AccountTicket:
    account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    profile: Optional[profile.Profile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    webproperty: Optional[webproperty.Webproperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webproperty' }})
    
