from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DuplicateTaskPathParams:
    task_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DuplicateTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DuplicateTaskRequestBody:
    data: Optional[shared.TaskDuplicateRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class DuplicateTaskRequest:
    path_params: DuplicateTaskPathParams = field(default=None)
    query_params: DuplicateTaskQueryParams = field(default=None)
    request: DuplicateTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class DuplicateTask201ApplicationJSON:
    data: Optional[shared.JobResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class DuplicateTaskResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    duplicate_task_201_application_json_object: Optional[DuplicateTask201ApplicationJSON] = field(default=None)
    
