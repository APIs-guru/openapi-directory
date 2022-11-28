from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class GetMirroredVideosTargetEnum(str, Enum):
    MY_VIDEOS = "my-videos"
    REMOTE_VIDEOS = "remote-videos"


@dataclass
class GetMirroredVideosQueryParams:
    target: GetMirroredVideosTargetEnum = field(metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[shared.VideoRedundanciesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMirroredVideosSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMirroredVideosRequest:
    query_params: GetMirroredVideosQueryParams = field()
    security: GetMirroredVideosSecurity = field()
    

@dataclass
class GetMirroredVideosResponse:
    content_type: str = field()
    status_code: int = field()
    video_redundancies: Optional[List[Any]] = field(default=None)
    
