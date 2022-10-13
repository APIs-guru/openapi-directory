from dataclasses import dataclass, field



@dataclass
class TeamsDeletePathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsDeleteRequest:
    path_params: TeamsDeletePathParams = field(default=None)
    security: TeamsDeleteSecurity = field(default=None)
    

@dataclass
class TeamsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
