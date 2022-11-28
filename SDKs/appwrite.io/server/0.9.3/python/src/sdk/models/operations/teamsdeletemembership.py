from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class TeamsDeleteMembershipPathParams:
    membership_id: str = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteMembershipSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsDeleteMembershipRequest:
    path_params: TeamsDeleteMembershipPathParams = field()
    security: TeamsDeleteMembershipSecurity = field()
    

@dataclass
class TeamsDeleteMembershipResponse:
    content_type: str = field()
    status_code: int = field()
    
