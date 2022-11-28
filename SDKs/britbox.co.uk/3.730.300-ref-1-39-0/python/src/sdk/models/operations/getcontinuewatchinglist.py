from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetContinueWatchingListIncludeEnum(str, Enum):
    EPISODE = "episode"
    SEASON = "season"
    SHOW = "show"

class GetContinueWatchingListShowItemTypeEnum(str, Enum):
    EPISODE = "episode"
    SEASON = "season"
    SHOW = "show"


@dataclass
class GetContinueWatchingListQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    include: Optional[List[GetContinueWatchingListIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    show_item_type: Optional[GetContinueWatchingListShowItemTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'show_item_type', 'style': 'form', 'explode': True }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContinueWatchingListSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetContinueWatchingListRequest:
    query_params: GetContinueWatchingListQueryParams = field()
    security: GetContinueWatchingListSecurity = field()
    

@dataclass
class GetContinueWatchingListResponse:
    content_type: str = field()
    status_code: int = field()
    item_list: Optional[shared.ItemList] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
