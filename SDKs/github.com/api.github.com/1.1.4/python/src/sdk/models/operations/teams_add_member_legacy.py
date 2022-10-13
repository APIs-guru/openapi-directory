from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsAddMemberLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsAddMemberLegacyRequest:
    path_params: TeamsAddMemberLegacyPathParams = field(default=None)
    

@dataclass_json
@dataclass
class TeamsAddMemberLegacy422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    

@dataclass_json
@dataclass
class TeamsAddMemberLegacy422ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    errors: Optional[List[TeamsAddMemberLegacy422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TeamsAddMemberLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    teams_add_member_legacy_422_application_json_object: Optional[TeamsAddMemberLegacy422ApplicationJSON] = field(default=None)
    
