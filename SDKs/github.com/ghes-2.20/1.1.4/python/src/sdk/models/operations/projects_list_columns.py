from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ProjectsListColumnsPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsListColumnsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ProjectsListColumnsRequest:
    path_params: ProjectsListColumnsPathParams = field()
    query_params: ProjectsListColumnsQueryParams = field()
    

@dataclass
class ProjectsListColumnsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_columns: Optional[List[shared.ProjectColumn]] = field(default=None)
    
