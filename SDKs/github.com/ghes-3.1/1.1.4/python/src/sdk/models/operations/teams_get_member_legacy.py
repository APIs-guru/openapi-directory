from dataclasses import dataclass, field



@dataclass
class TeamsGetMemberLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetMemberLegacyRequest:
    path_params: TeamsGetMemberLegacyPathParams = field(default=None)
    

@dataclass
class TeamsGetMemberLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
