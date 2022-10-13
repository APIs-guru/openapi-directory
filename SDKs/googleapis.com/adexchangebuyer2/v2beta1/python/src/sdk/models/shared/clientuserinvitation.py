from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClientUserInvitation:
    client_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientAccountId' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationId' }})
    
