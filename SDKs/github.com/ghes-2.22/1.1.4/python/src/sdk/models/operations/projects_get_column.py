from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsGetColumnPathParams:
    column_id: int = field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsGetColumnRequest:
    path_params: ProjectsGetColumnPathParams = field()
    

@dataclass
class ProjectsGetColumnResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_column: Optional[shared.ProjectColumn] = field(default=None)
    
