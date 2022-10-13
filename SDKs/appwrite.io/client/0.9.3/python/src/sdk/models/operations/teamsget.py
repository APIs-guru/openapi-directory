from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsGetRequest:
    path_params: TeamsGetPathParams = field(default=None)
    security: TeamsGetSecurity = field(default=None)
    

@dataclass
class TeamsGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team: Optional[shared.Team] = field(default=None)
    
