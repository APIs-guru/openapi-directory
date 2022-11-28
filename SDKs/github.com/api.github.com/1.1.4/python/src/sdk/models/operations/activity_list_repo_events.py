from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListRepoEventsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListRepoEventsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListRepoEventsRequest:
    path_params: ActivityListRepoEventsPathParams = field()
    query_params: ActivityListRepoEventsQueryParams = field()
    

@dataclass
class ActivityListRepoEventsResponse:
    content_type: str = field()
    status_code: int = field()
    events: Optional[List[shared.Event]] = field(default=None)
    
