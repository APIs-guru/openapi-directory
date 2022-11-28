from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TeamsListDiscussionsInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListDiscussionsInOrgQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    pinned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pinned', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListDiscussionsInOrgRequest:
    path_params: TeamsListDiscussionsInOrgPathParams = field()
    query_params: TeamsListDiscussionsInOrgQueryParams = field()
    

@dataclass
class TeamsListDiscussionsInOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    team_discussions: Optional[List[shared.TeamDiscussion]] = field(default=None)
    
