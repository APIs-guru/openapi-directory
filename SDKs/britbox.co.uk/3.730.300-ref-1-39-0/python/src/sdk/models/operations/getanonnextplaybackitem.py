from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAnonNextPlaybackItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    
class GetAnonNextPlaybackItemExpandEnum(str, Enum):
    PARENT = "parent"
    ANCESTORS = "ancestors"


@dataclass
class GetAnonNextPlaybackItemQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    expand: Optional[GetAnonNextPlaybackItemExpandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    

@dataclass
class GetAnonNextPlaybackItemRequest:
    path_params: GetAnonNextPlaybackItemPathParams = field()
    query_params: GetAnonNextPlaybackItemQueryParams = field()
    

@dataclass
class GetAnonNextPlaybackItemResponse:
    content_type: str = field()
    status_code: int = field()
    next_playback_item: Optional[shared.NextPlaybackItem] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
