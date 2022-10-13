from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUserTaskListPathParams:
    user_task_list_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'user_task_list_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserTaskListQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserTaskListRequest:
    path_params: GetUserTaskListPathParams = field(default=None)
    query_params: GetUserTaskListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetUserTaskList200ApplicationJSON:
    data: Optional[shared.UserTaskListResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetUserTaskListResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_user_task_list_200_application_json_object: Optional[GetUserTaskList200ApplicationJSON] = field(default=None)
    
