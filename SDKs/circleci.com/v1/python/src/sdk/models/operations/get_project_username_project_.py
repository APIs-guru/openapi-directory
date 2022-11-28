from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectQueryParams:
    filter: Optional[shared.FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectUsernameProjectRequest:
    path_params: GetProjectUsernameProjectPathParams = field()
    query_params: GetProjectUsernameProjectQueryParams = field()
    

@dataclass
class GetProjectUsernameProjectResponse:
    content_type: str = field()
    status_code: int = field()
    builds: Optional[List[shared.Build]] = field(default=None)
    
