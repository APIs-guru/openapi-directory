from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import account
from . import profile
from . import webproperty


@dataclass_json
@dataclass
class AccountTreeResponse:
    account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    profile: Optional[profile.Profile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    webproperty: Optional[webproperty.Webproperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webproperty' }})
    
