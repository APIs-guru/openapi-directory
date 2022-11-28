from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideosVideoIDChaptersPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosVideoIDChaptersQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideosVideoIDChaptersSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideosVideoIDChaptersRequest:
    path_params: GetVideosVideoIDChaptersPathParams = field()
    query_params: GetVideosVideoIDChaptersQueryParams = field()
    security: GetVideosVideoIDChaptersSecurity = field()
    

@dataclass
class GetVideosVideoIDChaptersResponse:
    content_type: str = field()
    status_code: int = field()
    chapters_list_response: Optional[shared.ChaptersListResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
