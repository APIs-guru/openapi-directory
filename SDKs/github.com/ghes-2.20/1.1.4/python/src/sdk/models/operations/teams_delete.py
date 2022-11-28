from dataclasses import dataclass, field



@dataclass
class TeamsDeletePathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteRequest:
    path_params: TeamsDeletePathParams = field()
    

@dataclass
class TeamsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
