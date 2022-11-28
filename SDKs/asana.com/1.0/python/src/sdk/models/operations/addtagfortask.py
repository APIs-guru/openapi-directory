from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddTagForTaskPathParams:
    task_gid: str = field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTagForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddTagForTaskRequestBody:
    data: Optional[shared.TaskAddTagRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddTagForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddTagForTaskRequest:
    path_params: AddTagForTaskPathParams = field()
    query_params: AddTagForTaskQueryParams = field()
    request: AddTagForTaskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddTagForTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_tag_for_task_200_application_json_object: Optional[AddTagForTask200ApplicationJSON] = field(default=None)
    
