from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetMirroredVideosTargetEnum(str, Enum):
    MY_VIDEOS = "my-videos"
    REMOTE_VIDEOS = "remote-videos"


@dataclass
class GetMirroredVideosQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[shared.VideoRedundanciesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    target: GetMirroredVideosTargetEnum = field(default=None, metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMirroredVideosSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMirroredVideosRequest:
    query_params: GetMirroredVideosQueryParams = field(default=None)
    security: GetMirroredVideosSecurity = field(default=None)
    

@dataclass
class GetMirroredVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_redundancies: Optional[List[Any]] = field(default=None)
    
