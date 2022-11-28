from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideosVideoIDCaptionsPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosVideoIDCaptionsQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideosVideoIDCaptionsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideosVideoIDCaptionsRequest:
    path_params: GetVideosVideoIDCaptionsPathParams = field()
    query_params: GetVideosVideoIDCaptionsQueryParams = field()
    security: GetVideosVideoIDCaptionsSecurity = field()
    

@dataclass
class GetVideosVideoIDCaptionsResponse:
    content_type: str = field()
    status_code: int = field()
    captions_list_response: Optional[shared.CaptionsListResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
