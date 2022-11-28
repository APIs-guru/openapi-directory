from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetPhotoExifByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    photo_id: str = field(metadata={'query_param': { 'field_name': 'photo_id', 'style': 'form', 'explode': True }})
    secret: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'secret', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetPhotoExifByID200ApplicationJSONPhotoExifRaw:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GetPhotoExifByID200ApplicationJSONPhotoExif:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    raw: Optional[GetPhotoExifByID200ApplicationJSONPhotoExifRaw] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    tagspace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagspace') }})
    tagspaceid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagspaceid') }})
    

@dataclass_json
@dataclass
class GetPhotoExifByID200ApplicationJSONPhoto:
    camera: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('camera') }})
    exif: Optional[List[GetPhotoExifByID200ApplicationJSONPhotoExif]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exif') }})
    farm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('farm') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass_json
@dataclass
class GetPhotoExifByID200ApplicationJSON:
    photo: Optional[GetPhotoExifByID200ApplicationJSONPhoto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass
class GetPhotoExifByIDRequest:
    query_params: GetPhotoExifByIDQueryParams = field()
    

@dataclass
class GetPhotoExifByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_photo_exif_by_id_200_application_json_object: Optional[GetPhotoExifByID200ApplicationJSON] = field(default=None)
    
