from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAnalyticsSessionsSessionIDEventsPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsRequest:
    path_params: GetAnalyticsSessionsSessionIDEventsPathParams = field(default=None)
    query_params: GetAnalyticsSessionsSessionIDEventsQueryParams = field(default=None)
    security: GetAnalyticsSessionsSessionIDEventsSecurity = field(default=None)
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    raw_statistics_list_player_session_events_response: Optional[shared.RawStatisticsListPlayerSessionEventsResponse] = field(default=None)
    
