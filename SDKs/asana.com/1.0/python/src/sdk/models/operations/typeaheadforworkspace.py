from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TypeaheadForWorkspacePathParams:
    workspace_gid: str = field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    
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
    resource_type: TypeaheadForWorkspaceResourceTypeEnum = field(metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    type: Optional[TypeaheadForWorkspaceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class TypeaheadForWorkspace200ApplicationJSON:
    r"""TypeaheadForWorkspace200ApplicationJSON
    A generic list of objects, such as those returned by the typeahead search endpoint.
    """
    
    data: Optional[List[shared.AsanaNamedResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class TypeaheadForWorkspaceRequest:
    path_params: TypeaheadForWorkspacePathParams = field()
    query_params: TypeaheadForWorkspaceQueryParams = field()
    

@dataclass
class TypeaheadForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    typeahead_for_workspace_200_application_json_object: Optional[TypeaheadForWorkspace200ApplicationJSON] = field(default=None)
    
