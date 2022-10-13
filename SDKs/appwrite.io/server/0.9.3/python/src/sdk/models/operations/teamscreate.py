from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class TeamsCreateRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    

@dataclass
class TeamsCreateSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsCreateRequest:
    request: Optional[TeamsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TeamsCreateSecurity = field(default=None)
    

@dataclass
class TeamsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team: Optional[shared.Team] = field(default=None)
    
