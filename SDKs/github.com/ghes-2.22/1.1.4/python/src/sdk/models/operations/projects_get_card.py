from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsGetCardPathParams:
    card_id: int = field(default=None, metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsGetCardRequest:
    path_params: ProjectsGetCardPathParams = field(default=None)
    

@dataclass
class ProjectsGetCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_card: Optional[shared.ProjectCard] = field(default=None)
    
