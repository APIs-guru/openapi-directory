from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ProjectsListColumnsPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsListColumnsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ProjectsListColumnsRequest:
    path_params: ProjectsListColumnsPathParams = field(default=None)
    query_params: ProjectsListColumnsQueryParams = field(default=None)
    

@dataclass
class ProjectsListColumnsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_columns: Optional[List[shared.ProjectColumn]] = field(default=None)
    
