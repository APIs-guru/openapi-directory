from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsDeleteColumnPathParams:
    column_id: int = field(default=None, metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsDeleteColumnRequest:
    path_params: ProjectsDeleteColumnPathParams = field(default=None)
    

@dataclass
class ProjectsDeleteColumnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
