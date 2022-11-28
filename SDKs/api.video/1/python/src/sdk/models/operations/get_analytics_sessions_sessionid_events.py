from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnalyticsSessionsSessionIDEventsPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsRequest:
    path_params: GetAnalyticsSessionsSessionIDEventsPathParams = field()
    query_params: GetAnalyticsSessionsSessionIDEventsQueryParams = field()
    security: GetAnalyticsSessionsSessionIDEventsSecurity = field()
    

@dataclass
class GetAnalyticsSessionsSessionIDEventsResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    raw_statistics_list_player_session_events_response: Optional[shared.RawStatisticsListPlayerSessionEventsResponse] = field(default=None)
    
