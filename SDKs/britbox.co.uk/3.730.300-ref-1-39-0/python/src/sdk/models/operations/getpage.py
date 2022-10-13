from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetPageItemDetailExpandEnum(str, Enum):
    ALL = "all"
    CHILDREN = "children"
    ANCESTORS = "ancestors"

class GetPageItemDetailSelectSeasonEnum(str, Enum):
    FIRST = "first"
    LATEST = "latest"

class GetPageTextEntryFormatEnum(str, Enum):
    MARKDOWN = "markdown"
    HTML = "html"


@dataclass
class GetPageQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    item_detail_expand: Optional[GetPageItemDetailExpandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'item_detail_expand', 'style': 'form', 'explode': True }})
    item_detail_select_season: Optional[GetPageItemDetailSelectSeasonEnum] = field(default=None, metadata={'query_param': { 'field_name': 'item_detail_select_season', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    list_page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'list_page_size', 'style': 'form', 'explode': True }})
    list_page_size_large: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'list_page_size_large', 'style': 'form', 'explode': True }})
    max_list_prefetch: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_list_prefetch', 'style': 'form', 'explode': True }})
    max_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    path: str = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    text_entry_format: Optional[GetPageTextEntryFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'text_entry_format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPageRequest:
    query_params: GetPageQueryParams = field(default=None)
    

@dataclass
class GetPageResponse:
    content_type: str = field(default=None)
    page: Optional[shared.Page] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
