from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListPublicOrgEventsPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListPublicOrgEventsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListPublicOrgEventsRequest:
    path_params: ActivityListPublicOrgEventsPathParams = field()
    query_params: ActivityListPublicOrgEventsQueryParams = field()
    

@dataclass
class ActivityListPublicOrgEventsResponse:
    content_type: str = field()
    status_code: int = field()
    events: Optional[List[shared.Event]] = field(default=None)
    
