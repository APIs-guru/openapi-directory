from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsUpdateMembershipRolesPathParams:
    membership_id: str = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsUpdateMembershipRolesRequestBody:
    roles: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    

@dataclass
class TeamsUpdateMembershipRolesSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsUpdateMembershipRolesRequest:
    path_params: TeamsUpdateMembershipRolesPathParams = field(default=None)
    request: Optional[TeamsUpdateMembershipRolesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TeamsUpdateMembershipRolesSecurity = field(default=None)
    

@dataclass
class TeamsUpdateMembershipRolesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    membership: Optional[shared.Membership] = field(default=None)
    
