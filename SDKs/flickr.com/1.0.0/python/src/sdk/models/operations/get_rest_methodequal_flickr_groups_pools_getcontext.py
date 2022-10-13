from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    photo_id: str = field(default=None, metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContextRequest:
    query_params: GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSONCount:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSON:
    count: Optional[GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSONCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    nextphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextphoto' }})
    prevphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prevphoto' }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    

@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContextResponse:
    content_type: str = field(default=None)
    get_rest_method_equal_flickr_groups_pools_get_context_200_application_json_object: Optional[GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
