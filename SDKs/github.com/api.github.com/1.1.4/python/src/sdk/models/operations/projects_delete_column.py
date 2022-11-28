from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsDeleteColumnPathParams:
    column_id: int = field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsDeleteColumnRequest:
    path_params: ProjectsDeleteColumnPathParams = field()
    

@dataclass
class ProjectsDeleteColumnResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
