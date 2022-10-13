from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteProjectStatusPathParams:
    project_status_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_status_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectStatusQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProjectStatusRequest:
    path_params: DeleteProjectStatusPathParams = field(default=None)
    query_params: DeleteProjectStatusQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteProjectStatus200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class DeleteProjectStatusResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    delete_project_status_200_application_json_object: Optional[DeleteProjectStatus200ApplicationJSON] = field(default=None)
    
