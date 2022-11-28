from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveDependenciesForTaskPathParams:
    task_gid: str = field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveDependenciesForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveDependenciesForTaskRequestBody:
    data: Optional[shared.ModifyDependenciesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class RemoveDependenciesForTask200ApplicationJSON:
    data: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class RemoveDependenciesForTaskRequest:
    path_params: RemoveDependenciesForTaskPathParams = field()
    query_params: RemoveDependenciesForTaskQueryParams = field()
    request: RemoveDependenciesForTaskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveDependenciesForTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    remove_dependencies_for_task_200_application_json_object: Optional[RemoveDependenciesForTask200ApplicationJSON] = field(default=None)
    
