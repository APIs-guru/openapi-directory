from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ProjectsListForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ProjectsListForRepoStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class ProjectsListForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[ProjectsListForRepoStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class ProjectsListForRepoRequest:
    path_params: ProjectsListForRepoPathParams = field()
    query_params: ProjectsListForRepoQueryParams = field()
    

@dataclass
class ProjectsListForRepoResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    projects: Optional[List[shared.Project]] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
