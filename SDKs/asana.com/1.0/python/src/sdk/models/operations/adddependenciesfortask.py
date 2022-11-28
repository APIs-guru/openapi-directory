from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddDependenciesForTaskPathParams:
    task_gid: str = field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddDependenciesForTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddDependenciesForTaskRequestBody:
    data: Optional[shared.ModifyDependenciesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddDependenciesForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddDependenciesForTaskRequest:
    path_params: AddDependenciesForTaskPathParams = field()
    query_params: AddDependenciesForTaskQueryParams = field()
    request: AddDependenciesForTaskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddDependenciesForTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_dependencies_for_task_200_application_json_object: Optional[AddDependenciesForTask200ApplicationJSON] = field(default=None)
    
