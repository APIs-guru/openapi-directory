from dataclasses import dataclass, field



@dataclass
class TeamsRemoveMemberLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveMemberLegacyRequest:
    path_params: TeamsRemoveMemberLegacyPathParams = field()
    

@dataclass
class TeamsRemoveMemberLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    
