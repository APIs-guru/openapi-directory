from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddFollowersForTaskPathParams:
    task_gid: str = field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddFollowersForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddFollowersForTaskRequestBody:
    data: Optional[shared.TaskAddFollowersRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddFollowersForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddFollowersForTaskRequest:
    path_params: AddFollowersForTaskPathParams = field()
    query_params: AddFollowersForTaskQueryParams = field()
    request: AddFollowersForTaskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddFollowersForTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_followers_for_task_200_application_json_object: Optional[AddFollowersForTask200ApplicationJSON] = field(default=None)
    
