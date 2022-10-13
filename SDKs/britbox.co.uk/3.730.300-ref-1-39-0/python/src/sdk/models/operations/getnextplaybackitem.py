from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetNextPlaybackItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    
class GetNextPlaybackItemExpandEnum(str, Enum):
    PARENT = "parent"
    ANCESTORS = "ancestors"


@dataclass
class GetNextPlaybackItemQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    expand: Optional[GetNextPlaybackItemExpandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNextPlaybackItemSecurity:
    profile_auth: shared.SchemeProfileAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNextPlaybackItemRequest:
    path_params: GetNextPlaybackItemPathParams = field(default=None)
    query_params: GetNextPlaybackItemQueryParams = field(default=None)
    security: GetNextPlaybackItemSecurity = field(default=None)
    

@dataclass
class GetNextPlaybackItemResponse:
    content_type: str = field(default=None)
    next_playback_item: Optional[shared.NextPlaybackItem] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
