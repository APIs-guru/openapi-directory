from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(default=None, metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDRequest:
    path_params: GetAnalyticsLiveStreamsLiveStreamIDPathParams = field(default=None)
    query_params: GetAnalyticsLiveStreamsLiveStreamIDQueryParams = field(default=None)
    security: GetAnalyticsLiveStreamsLiveStreamIDSecurity = field(default=None)
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    raw_statistics_list_live_stream_analytics_response: Optional[shared.RawStatisticsListLiveStreamAnalyticsResponse] = field(default=None)
    
