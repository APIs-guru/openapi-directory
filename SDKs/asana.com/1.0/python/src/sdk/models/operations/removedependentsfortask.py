from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RemoveDependentsForTaskPathParams:
    task_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveDependentsForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveDependentsForTaskRequestBody:
    data: Optional[shared.ModifyDependentsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveDependentsForTaskRequest:
    path_params: RemoveDependentsForTaskPathParams = field(default=None)
    query_params: RemoveDependentsForTaskQueryParams = field(default=None)
    request: RemoveDependentsForTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class RemoveDependentsForTask200ApplicationJSON:
    data: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveDependentsForTaskResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    remove_dependents_for_task_200_application_json_object: Optional[RemoveDependentsForTask200ApplicationJSON] = field(default=None)
    
