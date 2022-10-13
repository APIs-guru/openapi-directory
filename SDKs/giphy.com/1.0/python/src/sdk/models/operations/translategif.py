from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TranslateGifQueryParams:
    s: str = field(default=None, metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslateGifRequest:
    query_params: TranslateGifQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class TranslateGif200ApplicationJSON:
    data: Optional[shared.Gif] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class TranslateGifResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    translate_gif_200_application_json_object: Optional[TranslateGif200ApplicationJSON] = field(default=None)
    
