from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPhotoByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photo_id: str = field(default=None, metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPhotoByIDRequest:
    query_params: GetPhotoByIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPhotoByID200ApplicationJSON:
    photo: Optional[shared.Photo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo' }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    

@dataclass
class GetPhotoByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_photo_by_id_200_application_json_object: Optional[GetPhotoByID200ApplicationJSON] = field(default=None)
    
