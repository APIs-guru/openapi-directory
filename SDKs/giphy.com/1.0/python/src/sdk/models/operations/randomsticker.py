from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RandomStickerQueryParams:
    rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass
class RandomStickerRequest:
    query_params: RandomStickerQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class RandomSticker200ApplicationJSON:
    data: Optional[shared.Gif] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class RandomStickerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    random_sticker_200_application_json_object: Optional[RandomSticker200ApplicationJSON] = field(default=None)
    
