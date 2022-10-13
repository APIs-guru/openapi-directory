from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCustomFieldsForWorkspacePathParams:
    workspace_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldsForWorkspaceQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldsForWorkspaceRequest:
    path_params: GetCustomFieldsForWorkspacePathParams = field(default=None)
    query_params: GetCustomFieldsForWorkspaceQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCustomFieldsForWorkspace200ApplicationJSON:
    data: Optional[List[shared.CustomFieldResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetCustomFieldsForWorkspaceResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_custom_fields_for_workspace_200_application_json_object: Optional[GetCustomFieldsForWorkspace200ApplicationJSON] = field(default=None)
    
