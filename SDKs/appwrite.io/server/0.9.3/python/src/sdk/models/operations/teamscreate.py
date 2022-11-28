from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class TeamsCreateRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

@dataclass
class TeamsCreateSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsCreateRequest:
    security: TeamsCreateSecurity = field()
    request: Optional[TeamsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    team: Optional[shared.Team] = field(default=None)
    
