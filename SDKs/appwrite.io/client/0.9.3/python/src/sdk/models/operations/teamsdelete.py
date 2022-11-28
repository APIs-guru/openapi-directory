from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class TeamsDeletePathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsDeleteRequest:
    path_params: TeamsDeletePathParams = field()
    security: TeamsDeleteSecurity = field()
    

@dataclass
class TeamsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
