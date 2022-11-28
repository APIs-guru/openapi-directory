from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveFollowersPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFollowersQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveFollowersRequestBody:
    data: Optional[shared.TaskAddFollowersRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class RemoveFollowers201ApplicationJSON:
    data: Optional[shared.GoalResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class RemoveFollowersRequest:
    path_params: RemoveFollowersPathParams = field()
    query_params: RemoveFollowersQueryParams = field()
    request: RemoveFollowersRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveFollowersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    remove_followers_201_application_json_object: Optional[RemoveFollowers201ApplicationJSON] = field(default=None)
    
