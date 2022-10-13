from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ProjectsListCardsPathParams:
    column_id: int = field(default=None, metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    
class ProjectsListCardsArchivedStateEnum(str, Enum):
    ALL = "all"
    ARCHIVED = "archived"
    NOT_ARCHIVED = "not_archived"


@dataclass
class ProjectsListCardsQueryParams:
    archived_state: Optional[ProjectsListCardsArchivedStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'archived_state', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ProjectsListCardsRequest:
    path_params: ProjectsListCardsPathParams = field(default=None)
    query_params: ProjectsListCardsQueryParams = field(default=None)
    

@dataclass
class ProjectsListCardsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_cards: Optional[List[shared.ProjectCard]] = field(default=None)
    
