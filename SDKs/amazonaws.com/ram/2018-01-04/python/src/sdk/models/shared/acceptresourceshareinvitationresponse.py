from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceshareinvitation


@dataclass_json
@dataclass
class AcceptResourceShareInvitationResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    resource_share_invitation: Optional[resourceshareinvitation.ResourceShareInvitation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareInvitation' }})
    
