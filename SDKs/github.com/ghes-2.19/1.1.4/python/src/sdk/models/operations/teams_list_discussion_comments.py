from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class TeamsListDiscussionCommentsPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsListDiscussionCommentsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class TeamsListDiscussionCommentsQueryParams:
    direction: Optional[TeamsListDiscussionCommentsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListDiscussionCommentsRequest:
    path_params: TeamsListDiscussionCommentsPathParams = field(default=None)
    query_params: TeamsListDiscussionCommentsQueryParams = field(default=None)
    

@dataclass
class TeamsListDiscussionCommentsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_discussion_comments: Optional[List[shared.TeamDiscussionComment]] = field(default=None)
    
