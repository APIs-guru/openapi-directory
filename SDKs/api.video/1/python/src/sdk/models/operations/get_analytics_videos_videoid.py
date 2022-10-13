from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAnalyticsVideosVideoIDPathParams:
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalyticsVideosVideoIDQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    metadata: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'metadata', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAnalyticsVideosVideoIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalyticsVideosVideoIDRequest:
    path_params: GetAnalyticsVideosVideoIDPathParams = field(default=None)
    query_params: GetAnalyticsVideosVideoIDQueryParams = field(default=None)
    security: GetAnalyticsVideosVideoIDSecurity = field(default=None)
    

@dataclass
class GetAnalyticsVideosVideoIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    raw_statistics_list_sessions_response: Optional[shared.RawStatisticsListSessionsResponse] = field(default=None)
    
