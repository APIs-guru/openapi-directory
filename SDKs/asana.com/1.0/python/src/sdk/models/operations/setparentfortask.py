from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SetParentForTaskPathParams:
    task_gid: str = field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetParentForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SetParentForTaskRequestBody:
    data: Optional[shared.TaskSetParentRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class SetParentForTask200ApplicationJSON:
    data: Optional[shared.TaskResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class SetParentForTaskRequest:
    path_params: SetParentForTaskPathParams = field()
    query_params: SetParentForTaskQueryParams = field()
    request: SetParentForTaskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetParentForTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    set_parent_for_task_200_application_json_object: Optional[SetParentForTask200ApplicationJSON] = field(default=None)
    
