from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetVideoPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoRequest:
    path_params: GetVideoPathParams = field()
    

@dataclass
class GetVideoResponse:
    content_type: str = field()
    status_code: int = field()
    video_details: Optional[shared.VideoDetails] = field(default=None)
    
