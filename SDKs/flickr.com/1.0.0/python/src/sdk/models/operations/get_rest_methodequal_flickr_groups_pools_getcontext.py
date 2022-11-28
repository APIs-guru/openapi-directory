from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photo_id: str = field(metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSONCount:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSON:
    count: Optional[GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSONCount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    nextphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextphoto') }})
    prevphoto: Optional[shared.ContextPhoto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevphoto') }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContextRequest:
    query_params: GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams = field()
    

@dataclass
class GetRestMethodEqualFlickrGroupsPoolsGetContextResponse:
    content_type: str = field()
    status_code: int = field()
    get_rest_method_equal_flickr_groups_pools_get_context_200_application_json_object: Optional[GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSON] = field(default=None)
    
