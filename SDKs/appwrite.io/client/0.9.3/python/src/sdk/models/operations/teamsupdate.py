from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsUpdatePathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsUpdateRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class TeamsUpdateSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsUpdateRequest:
    path_params: TeamsUpdatePathParams = field(default=None)
    request: Optional[TeamsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TeamsUpdateSecurity = field(default=None)
    

@dataclass
class TeamsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team: Optional[shared.Team] = field(default=None)
    
