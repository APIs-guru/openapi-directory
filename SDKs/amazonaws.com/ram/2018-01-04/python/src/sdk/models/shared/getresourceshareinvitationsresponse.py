from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceshareinvitation


@dataclass_json
@dataclass
class GetResourceShareInvitationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_share_invitations: Optional[List[resourceshareinvitation.ResourceShareInvitation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareInvitations' }})
    
