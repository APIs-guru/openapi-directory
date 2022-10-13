from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSubtaskForTaskPathParams:
    task_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSubtaskForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateSubtaskForTaskRequestBody:
    data: Optional[shared.TaskRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateSubtaskForTaskRequest:
    path_params: CreateSubtaskForTaskPathParams = field(default=None)
    query_params: CreateSubtaskForTaskQueryParams = field(default=None)
    request: CreateSubtaskForTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateSubtaskForTask201ApplicationJSON:
    data: Optional[shared.TaskResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateSubtaskForTaskResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    create_subtask_for_task_201_application_json_object: Optional[CreateSubtaskForTask201ApplicationJSON] = field(default=None)
    
