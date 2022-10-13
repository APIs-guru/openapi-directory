from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetGroupPhotosByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupPhotosByIDRequest:
    query_params: GetGroupPhotosByIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetGroupPhotosByID200ApplicationJSON:
    photos: Optional[List[shared.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    

@dataclass
class GetGroupPhotosByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_group_photos_by_id_200_application_json_object: Optional[GetGroupPhotosByID200ApplicationJSON] = field(default=None)
    
