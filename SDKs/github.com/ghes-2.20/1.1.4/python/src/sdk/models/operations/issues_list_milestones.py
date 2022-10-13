from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class IssuesListMilestonesPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesListMilestonesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class IssuesListMilestonesSortEnum(str, Enum):
    DUE_ON = "due_on"
    COMPLETENESS = "completeness"

class IssuesListMilestonesStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class IssuesListMilestonesQueryParams:
    direction: Optional[IssuesListMilestonesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[IssuesListMilestonesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[IssuesListMilestonesStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListMilestonesRequest:
    path_params: IssuesListMilestonesPathParams = field(default=None)
    query_params: IssuesListMilestonesQueryParams = field(default=None)
    

@dataclass
class IssuesListMilestonesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    milestones: Optional[List[shared.Milestone]] = field(default=None)
    
