from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetFavoritesForUserPathParams:
    user_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    
class GetFavoritesForUserResourceTypeEnum(str, Enum):
    PORTFOLIO = "portfolio"
    PROJECT = "project"
    TAG = "tag"
    TASK = "task"
    USER = "user"


@dataclass
class GetFavoritesForUserQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    resource_type: GetFavoritesForUserResourceTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    workspace: str = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFavoritesForUserRequest:
    path_params: GetFavoritesForUserPathParams = field(default=None)
    query_params: GetFavoritesForUserQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetFavoritesForUser200ApplicationJSON:
    data: Optional[List[shared.AsanaNamedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetFavoritesForUserResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_favorites_for_user_200_application_json_object: Optional[GetFavoritesForUser200ApplicationJSON] = field(default=None)
    
