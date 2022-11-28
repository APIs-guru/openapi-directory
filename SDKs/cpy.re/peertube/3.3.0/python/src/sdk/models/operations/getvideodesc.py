from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoDescPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoDescRequest:
    path_params: GetVideoDescPathParams = field()
    

@dataclass
class GetVideoDescResponse:
    content_type: str = field()
    status_code: int = field()
    get_video_desc_200_application_json_string: Optional[str] = field(default=None)
    
