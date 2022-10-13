from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TypeaheadForWorkspacePathParams:
    workspace_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    
class TypeaheadForWorkspaceResourceTypeEnum(str, Enum):
    CUSTOM_FIELD = "custom_field"
    PORTFOLIO = "portfolio"
    PROJECT = "project"
    TAG = "tag"
    TASK = "task"
    USER = "user"

class TypeaheadForWorkspaceTypeEnum(str, Enum):
    CUSTOM_FIELD = "custom_field"
    PORTFOLIO = "portfolio"
    PROJECT = "project"
    TAG = "tag"
    TASK = "task"
    USER = "user"


@dataclass
class TypeaheadForWorkspaceQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    resource_type: TypeaheadForWorkspaceResourceTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    type: Optional[TypeaheadForWorkspaceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class TypeaheadForWorkspaceRequest:
    path_params: TypeaheadForWorkspacePathParams = field(default=None)
    query_params: TypeaheadForWorkspaceQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class TypeaheadForWorkspace200ApplicationJSON:
    data: Optional[List[shared.AsanaNamedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class TypeaheadForWorkspaceResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    typeahead_for_workspace_200_application_json_object: Optional[TypeaheadForWorkspace200ApplicationJSON] = field(default=None)
    
