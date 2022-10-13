from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideosVideoIDCaptionsPathParams:
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosVideoIDCaptionsQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideosVideoIDCaptionsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideosVideoIDCaptionsRequest:
    path_params: GetVideosVideoIDCaptionsPathParams = field(default=None)
    query_params: GetVideosVideoIDCaptionsQueryParams = field(default=None)
    security: GetVideosVideoIDCaptionsSecurity = field(default=None)
    

@dataclass
class GetVideosVideoIDCaptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    captions_list_response: Optional[shared.CaptionsListResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
