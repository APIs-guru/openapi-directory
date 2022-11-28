from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsListBlockedUsersPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsListBlockedUsers415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class OrgsListBlockedUsersRequest:
    path_params: OrgsListBlockedUsersPathParams = field()
    

@dataclass
class OrgsListBlockedUsersResponse:
    content_type: str = field()
    status_code: int = field()
    orgs_list_blocked_users_415_application_json_object: Optional[OrgsListBlockedUsers415ApplicationJSON] = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
