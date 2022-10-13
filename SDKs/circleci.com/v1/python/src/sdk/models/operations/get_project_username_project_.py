from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectQueryParams:
    filter: Optional[shared.FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectUsernameProjectRequest:
    path_params: GetProjectUsernameProjectPathParams = field(default=None)
    query_params: GetProjectUsernameProjectQueryParams = field(default=None)
    

@dataclass
class GetProjectUsernameProjectResponse:
    builds: Optional[List[shared.Build]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
