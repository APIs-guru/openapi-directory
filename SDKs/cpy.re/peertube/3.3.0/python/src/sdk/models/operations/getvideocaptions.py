from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetVideoCaptionsPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetVideoCaptions200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetVideoCaptionsRequest:
    path_params: GetVideoCaptionsPathParams = field()
    

@dataclass
class GetVideoCaptionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_video_captions_200_application_json_object: Optional[GetVideoCaptions200ApplicationJSON] = field(default=None)
    
