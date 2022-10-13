from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddDependentsForTaskPathParams:
    task_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddDependentsForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddDependentsForTaskRequestBody:
    data: Optional[shared.ModifyDependentsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class AddDependentsForTaskRequest:
    path_params: AddDependentsForTaskPathParams = field(default=None)
    query_params: AddDependentsForTaskQueryParams = field(default=None)
    request: AddDependentsForTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AddDependentsForTask200ApplicationJSON:
    data: Optional[List[shared.TaskCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class AddDependentsForTaskResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    add_dependents_for_task_200_application_json_object: Optional[AddDependentsForTask200ApplicationJSON] = field(default=None)
    
