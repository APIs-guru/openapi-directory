from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoDescPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoDescRequest:
    path_params: GetVideoDescPathParams = field(default=None)
    

@dataclass
class GetVideoDescResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_video_desc_200_application_json_string: Optional[str] = field(default=None)
    
