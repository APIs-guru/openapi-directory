from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TranslateStickerQueryParams:
    s: str = field(metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class TranslateSticker200ApplicationJSON:
    data: Optional[shared.Gif] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class TranslateStickerRequest:
    query_params: TranslateStickerQueryParams = field()
    

@dataclass
class TranslateStickerResponse:
    content_type: str = field()
    status_code: int = field()
    translate_sticker_200_application_json_object: Optional[TranslateSticker200ApplicationJSON] = field(default=None)
    
