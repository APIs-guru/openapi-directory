from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetItvPageItemDetailExpandEnum(str, Enum):
    ALL = "all"
    CHILDREN = "children"
    ANCESTORS = "ancestors"

class GetItvPageItemDetailSelectSeasonEnum(str, Enum):
    FIRST = "first"
    LATEST = "latest"

class GetItvPageTextEntryFormatEnum(str, Enum):
    MARKDOWN = "markdown"
    HTML = "html"


@dataclass
class GetItvPageQueryParams:
    path: str = field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    item_detail_expand: Optional[GetItvPageItemDetailExpandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'item_detail_expand', 'style': 'form', 'explode': True }})
    item_detail_select_season: Optional[GetItvPageItemDetailSelectSeasonEnum] = field(default=None, metadata={'query_param': { 'field_name': 'item_detail_select_season', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    list_page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'list_page_size', 'style': 'form', 'explode': True }})
    list_page_size_large: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'list_page_size_large', 'style': 'form', 'explode': True }})
    max_list_prefetch: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_list_prefetch', 'style': 'form', 'explode': True }})
    max_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    text_entry_format: Optional[GetItvPageTextEntryFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'text_entry_format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItvPageRequest:
    query_params: GetItvPageQueryParams = field()
    

@dataclass
class GetItvPageResponse:
    content_type: str = field()
    status_code: int = field()
    page: Optional[shared.Page] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
