from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsUpdateMembershipStatusPathParams:
    membership_id: str = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsUpdateMembershipStatusRequestBody:
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass
class TeamsUpdateMembershipStatusSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsUpdateMembershipStatusRequest:
    path_params: TeamsUpdateMembershipStatusPathParams = field(default=None)
    request: Optional[TeamsUpdateMembershipStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TeamsUpdateMembershipStatusSecurity = field(default=None)
    

@dataclass
class TeamsUpdateMembershipStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    membership: Optional[shared.Membership] = field(default=None)
    
