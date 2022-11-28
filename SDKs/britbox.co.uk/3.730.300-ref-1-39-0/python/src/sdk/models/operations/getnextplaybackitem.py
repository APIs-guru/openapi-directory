from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetNextPlaybackItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    
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
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNextPlaybackItemRequest:
    path_params: GetNextPlaybackItemPathParams = field()
    query_params: GetNextPlaybackItemQueryParams = field()
    security: GetNextPlaybackItemSecurity = field()
    

@dataclass
class GetNextPlaybackItemResponse:
    content_type: str = field()
    status_code: int = field()
    next_playback_item: Optional[shared.NextPlaybackItem] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
