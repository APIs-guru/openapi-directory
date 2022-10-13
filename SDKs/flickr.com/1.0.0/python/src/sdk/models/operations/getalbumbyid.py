from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAlbumByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photoset_id: str = field(default=None, metadata={'query_param': { 'field_name': 'photoset_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumByIDRequest:
    query_params: GetAlbumByIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAlbumByID200ApplicationJSON:
    photoset: Optional[List[shared.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoset' }})
    

@dataclass
class GetAlbumByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_album_by_id_200_application_json_object: Optional[GetAlbumByID200ApplicationJSON] = field(default=None)
    
