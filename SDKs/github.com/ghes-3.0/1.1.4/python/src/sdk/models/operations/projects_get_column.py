from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsGetColumnPathParams:
    column_id: int = field(default=None, metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsGetColumnRequest:
    path_params: ProjectsGetColumnPathParams = field(default=None)
    

@dataclass
class ProjectsGetColumnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_column: Optional[shared.ProjectColumn] = field(default=None)
    
