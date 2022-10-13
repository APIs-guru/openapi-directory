from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetLiveStreamsSortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetLiveStreamsQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetLiveStreamsSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    stream_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'streamKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLiveStreamsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLiveStreamsRequest:
    query_params: GetLiveStreamsQueryParams = field(default=None)
    security: GetLiveStreamsSecurity = field(default=None)
    

@dataclass
class GetLiveStreamsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    live_stream_list_response: Optional[shared.LiveStreamListResponse] = field(default=None)
    
