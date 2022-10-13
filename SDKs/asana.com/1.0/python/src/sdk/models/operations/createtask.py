from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateTaskRequestBody:
    data: Optional[shared.TaskRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateTaskRequest:
    query_params: CreateTaskQueryParams = field(default=None)
    request: CreateTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateTask201ApplicationJSON:
    data: Optional[shared.TaskResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateTaskResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    create_task_201_application_json_object: Optional[CreateTask201ApplicationJSON] = field(default=None)
    
