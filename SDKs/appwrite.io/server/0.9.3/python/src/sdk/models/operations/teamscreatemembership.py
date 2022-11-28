from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCreateMembershipPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateMembershipRequestBody:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    roles: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class TeamsCreateMembershipSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsCreateMembershipRequest:
    path_params: TeamsCreateMembershipPathParams = field()
    security: TeamsCreateMembershipSecurity = field()
    request: Optional[TeamsCreateMembershipRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateMembershipResponse:
    content_type: str = field()
    status_code: int = field()
    membership: Optional[shared.Membership] = field(default=None)
    
