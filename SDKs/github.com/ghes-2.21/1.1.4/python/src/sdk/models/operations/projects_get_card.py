from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsGetCardPathParams:
    card_id: int = field(metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsGetCardRequest:
    path_params: ProjectsGetCardPathParams = field()
    

@dataclass
class ProjectsGetCardResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_card: Optional[shared.ProjectCard] = field(default=None)
    
