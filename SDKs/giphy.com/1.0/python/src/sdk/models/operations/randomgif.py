from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RandomGifQueryParams:
    rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RandomGif200ApplicationJSON:
    data: Optional[shared.Gif] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class RandomGifRequest:
    query_params: RandomGifQueryParams = field()
    

@dataclass
class RandomGifResponse:
    content_type: str = field()
    status_code: int = field()
    random_gif_200_application_json_object: Optional[RandomGif200ApplicationJSON] = field(default=None)
    
