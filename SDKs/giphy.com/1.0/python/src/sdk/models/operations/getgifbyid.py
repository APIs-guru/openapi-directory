from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetGifByIDPathParams:
    gif_id: int = field(default=None, metadata={'path_param': { 'field_name': 'gifId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGifByIDRequest:
    path_params: GetGifByIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetGifByID200ApplicationJSON:
    data: Optional[shared.Gif] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetGifByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_gif_by_id_200_application_json_object: Optional[GetGifByID200ApplicationJSON] = field(default=None)
    
