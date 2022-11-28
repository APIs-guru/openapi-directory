from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPhotoByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photo_id: str = field(metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetPhotoByID200ApplicationJSON:
    photo: Optional[shared.Photo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass
class GetPhotoByIDRequest:
    query_params: GetPhotoByIDQueryParams = field()
    

@dataclass
class GetPhotoByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_photo_by_id_200_application_json_object: Optional[GetPhotoByID200ApplicationJSON] = field(default=None)
    
