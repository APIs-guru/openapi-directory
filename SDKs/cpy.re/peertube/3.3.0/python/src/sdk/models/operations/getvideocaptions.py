from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetVideoCaptionsPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoCaptionsRequest:
    path_params: GetVideoCaptionsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetVideoCaptions200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetVideoCaptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_video_captions_200_application_json_object: Optional[GetVideoCaptions200ApplicationJSON] = field(default=None)
    
