from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ProjectsListForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class ProjectsListForOrgStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class ProjectsListForOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[ProjectsListForOrgStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class ProjectsListForOrgRequest:
    path_params: ProjectsListForOrgPathParams = field()
    query_params: ProjectsListForOrgQueryParams = field()
    

@dataclass
class ProjectsListForOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    projects: Optional[List[shared.Project]] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
