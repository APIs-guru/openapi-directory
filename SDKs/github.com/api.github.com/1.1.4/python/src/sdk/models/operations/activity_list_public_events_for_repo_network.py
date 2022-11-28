from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListPublicEventsForRepoNetworkPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListPublicEventsForRepoNetworkQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListPublicEventsForRepoNetworkRequest:
    path_params: ActivityListPublicEventsForRepoNetworkPathParams = field()
    query_params: ActivityListPublicEventsForRepoNetworkQueryParams = field()
    

@dataclass
class ActivityListPublicEventsForRepoNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    
