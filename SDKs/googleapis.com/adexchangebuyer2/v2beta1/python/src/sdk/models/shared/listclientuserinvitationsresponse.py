from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientuserinvitation


@dataclass_json
@dataclass
class ListClientUserInvitationsResponse:
    invitations: Optional[List[clientuserinvitation.ClientUserInvitation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
