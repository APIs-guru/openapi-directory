from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchedulesQueryParams:
    feed_type: str = field(metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSchedulesRequest:
    query_params: GetSchedulesQueryParams = field()
    security: GetSchedulesSecurity = field()
    

@dataclass
class GetSchedulesResponse:
    content_type: str = field()
    status_code: int = field()
    user_schedule_collection: Optional[shared.UserScheduleCollection] = field(default=None)
    
