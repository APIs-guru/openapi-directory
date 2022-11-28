from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetFavoritesContextByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photo_id: str = field(metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetFavoritesContextByID200ApplicationJSONCount:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GetFavoritesContextByID200ApplicationJSON:
    count: Optional[GetFavoritesContextByID200ApplicationJSONCount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    nextphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextphoto') }})
    prevphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevphoto') }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass
class GetFavoritesContextByIDRequest:
    query_params: GetFavoritesContextByIDQueryParams = field()
    

@dataclass
class GetFavoritesContextByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_favorites_context_by_id_200_application_json_object: Optional[GetFavoritesContextByID200ApplicationJSON] = field(default=None)
    
