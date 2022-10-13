from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPhotolistContextByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photo_id: str = field(default=None, metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    photolist_id: str = field(default=None, metadata={'query_param': { 'field_name': 'photolist_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPhotolistContextByIDRequest:
    query_params: GetPhotolistContextByIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPhotolistContextByID200ApplicationJSONCount:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class GetPhotolistContextByID200ApplicationJSON:
    count: Optional[GetPhotolistContextByID200ApplicationJSONCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    nextphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextphoto' }})
    prevphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prevphoto' }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    

@dataclass
class GetPhotolistContextByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_photolist_context_by_id_200_application_json_object: Optional[GetPhotolistContextByID200ApplicationJSON] = field(default=None)
    
