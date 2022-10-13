from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsListBlockedUsersPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListBlockedUsersRequest:
    path_params: OrgsListBlockedUsersPathParams = field(default=None)
    

@dataclass_json
@dataclass
class OrgsListBlockedUsers415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class OrgsListBlockedUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    orgs_list_blocked_users_415_application_json_object: Optional[OrgsListBlockedUsers415ApplicationJSON] = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
