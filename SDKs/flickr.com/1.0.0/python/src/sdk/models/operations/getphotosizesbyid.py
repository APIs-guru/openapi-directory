from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPhotoSizesByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photo_id: str = field(metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetPhotoSizesByID200ApplicationJSONSizes:
    canblog: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canblog') }})
    candownload: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candownload') }})
    canprint: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canprint') }})
    sizes: Optional[List[shared.Size]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    

@dataclass_json
@dataclass
class GetPhotoSizesByID200ApplicationJSON:
    sizes: Optional[GetPhotoSizesByID200ApplicationJSONSizes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass
class GetPhotoSizesByIDRequest:
    query_params: GetPhotoSizesByIDQueryParams = field()
    

@dataclass
class GetPhotoSizesByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_photo_sizes_by_id_200_application_json_object: Optional[GetPhotoSizesByID200ApplicationJSON] = field(default=None)
    
