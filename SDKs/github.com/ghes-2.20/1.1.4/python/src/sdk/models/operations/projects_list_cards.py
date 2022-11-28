from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ProjectsListCardsPathParams:
    column_id: int = field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    
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
    path_params: ProjectsListCardsPathParams = field()
    query_params: ProjectsListCardsQueryParams = field()
    

@dataclass
class ProjectsListCardsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    project_cards: Optional[List[shared.ProjectCard]] = field(default=None)
    
