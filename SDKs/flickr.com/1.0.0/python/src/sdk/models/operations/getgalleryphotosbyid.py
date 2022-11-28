from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetGalleryPhotosByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    gallery_id: str = field(metadata={'query_param': { 'field_name': 'gallery_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetGalleryPhotosByID200ApplicationJSON:
    photos: Optional[List[shared.Photo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    

@dataclass
class GetGalleryPhotosByIDRequest:
    query_params: GetGalleryPhotosByIDQueryParams = field()
    

@dataclass
class GetGalleryPhotosByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_gallery_photos_by_id_200_application_json_object: Optional[GetGalleryPhotosByID200ApplicationJSON] = field(default=None)
    
