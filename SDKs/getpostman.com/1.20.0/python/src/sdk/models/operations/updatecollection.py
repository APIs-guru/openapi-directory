from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateCollectionPathParams:
    collection_uid: str = field(metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBodyCollectionInfo:
    postman_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_postman_id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBodyCollectionItemItemRequestBody:
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw') }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBodyCollectionItemItemRequestHeader:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBodyCollectionItemItemRequest:
    body: Optional[UpdateCollectionRequestBodyCollectionItemItemRequestBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    header: Optional[List[UpdateCollectionRequestBodyCollectionItemItemRequestHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBodyCollectionItemItem:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request: Optional[UpdateCollectionRequestBodyCollectionItemItemRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBodyCollectionItem:
    item: Optional[List[UpdateCollectionRequestBodyCollectionItemItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBodyCollection:
    info: Optional[UpdateCollectionRequestBodyCollectionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    item: Optional[List[UpdateCollectionRequestBodyCollectionItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclass
class UpdateCollectionRequestBody:
    collection: Optional[UpdateCollectionRequestBodyCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclass
class UpdateCollection200ApplicationJSONCollection:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class UpdateCollection200ApplicationJSON:
    collection: Optional[UpdateCollection200ApplicationJSONCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclass
class UpdateCollection400ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateCollection400ApplicationJSON:
    error: Optional[UpdateCollection400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclass
class UpdateCollection403ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateCollection403ApplicationJSON:
    error: Optional[UpdateCollection403ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclass
class UpdateCollection404ApplicationJSONErrorDetails:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclass
class UpdateCollection404ApplicationJSONError:
    details: Optional[UpdateCollection404ApplicationJSONErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateCollection404ApplicationJSON:
    error: Optional[UpdateCollection404ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class UpdateCollectionRequest:
    path_params: UpdateCollectionPathParams = field()
    request: Optional[UpdateCollectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    update_collection_200_application_json_object: Optional[UpdateCollection200ApplicationJSON] = field(default=None)
    update_collection_400_application_json_object: Optional[UpdateCollection400ApplicationJSON] = field(default=None)
    update_collection_403_application_json_object: Optional[UpdateCollection403ApplicationJSON] = field(default=None)
    update_collection_404_application_json_object: Optional[UpdateCollection404ApplicationJSON] = field(default=None)
    
