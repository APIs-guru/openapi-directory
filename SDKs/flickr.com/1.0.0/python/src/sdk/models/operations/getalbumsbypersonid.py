from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetAlbumsByPersonIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    user_id: str = field(metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetAlbumsByPersonID200ApplicationJSON:
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    perpage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perpage') }})
    photosets: Optional[List[shared.Album]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photosets') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetAlbumsByPersonIDRequest:
    query_params: GetAlbumsByPersonIDQueryParams = field()
    

@dataclass
class GetAlbumsByPersonIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_albums_by_person_id_200_application_json_object: Optional[GetAlbumsByPersonID200ApplicationJSON] = field(default=None)
    
