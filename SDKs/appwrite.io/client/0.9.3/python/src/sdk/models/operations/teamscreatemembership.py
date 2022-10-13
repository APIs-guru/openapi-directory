from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCreateMembershipPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateMembershipRequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    roles: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class TeamsCreateMembershipSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsCreateMembershipRequest:
    path_params: TeamsCreateMembershipPathParams = field(default=None)
    request: Optional[TeamsCreateMembershipRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TeamsCreateMembershipSecurity = field(default=None)
    

@dataclass
class TeamsCreateMembershipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    membership: Optional[shared.Membership] = field(default=None)
    
