from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetVideoPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoRequest:
    path_params: GetVideoPathParams = field(default=None)
    

@dataclass
class GetVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_details: Optional[shared.VideoDetails] = field(default=None)
    
