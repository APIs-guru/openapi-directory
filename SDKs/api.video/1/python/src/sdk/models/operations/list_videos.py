from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListVideosQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    live_stream_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    metadata: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'metadata', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVideosSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ListVideosRequest:
    query_params: ListVideosQueryParams = field()
    security: ListVideosSecurity = field()
    

@dataclass
class ListVideosResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    videos_list_response: Optional[shared.VideosListResponse] = field(default=None)
    
