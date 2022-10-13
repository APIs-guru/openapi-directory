from dataclasses import dataclass, field



@dataclass
class TeamsDeleteMembershipPathParams:
    membership_id: str = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteMembershipSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsDeleteMembershipRequest:
    path_params: TeamsDeleteMembershipPathParams = field(default=None)
    security: TeamsDeleteMembershipSecurity = field(default=None)
    

@dataclass
class TeamsDeleteMembershipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
