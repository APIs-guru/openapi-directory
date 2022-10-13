from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchedulesQueryParams:
    feed_type: str = field(default=None, metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSchedulesRequest:
    query_params: GetSchedulesQueryParams = field(default=None)
    security: GetSchedulesSecurity = field(default=None)
    

@dataclass
class GetSchedulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_schedule_collection: Optional[shared.UserScheduleCollection] = field(default=None)
    
