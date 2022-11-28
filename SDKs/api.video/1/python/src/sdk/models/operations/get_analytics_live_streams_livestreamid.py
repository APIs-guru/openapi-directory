from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDPathParams:
    live_stream_id: str = field(metadata={'path_param': { 'field_name': 'liveStreamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDRequest:
    path_params: GetAnalyticsLiveStreamsLiveStreamIDPathParams = field()
    query_params: GetAnalyticsLiveStreamsLiveStreamIDQueryParams = field()
    security: GetAnalyticsLiveStreamsLiveStreamIDSecurity = field()
    

@dataclass
class GetAnalyticsLiveStreamsLiveStreamIDResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    raw_statistics_list_live_stream_analytics_response: Optional[shared.RawStatisticsListLiveStreamAnalyticsResponse] = field(default=None)
    
