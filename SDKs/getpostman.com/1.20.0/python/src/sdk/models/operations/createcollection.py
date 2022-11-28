from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateCollectionRequestBodyCollectionInfo:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclass
class CreateCollectionRequestBodyCollectionItemItemRequestBody:
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw') }})
    

@dataclass_json
@dataclass
class CreateCollectionRequestBodyCollectionItemItemRequestHeader:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class CreateCollectionRequestBodyCollectionItemItemRequest:
    body: Optional[CreateCollectionRequestBodyCollectionItemItemRequestBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    header: Optional[List[CreateCollectionRequestBodyCollectionItemItemRequestHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CreateCollectionRequestBodyCollectionItemItem:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request: Optional[CreateCollectionRequestBodyCollectionItemItemRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    

@dataclass_json
@dataclass
class CreateCollectionRequestBodyCollectionItem:
    item: Optional[List[CreateCollectionRequestBodyCollectionItemItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class CreateCollectionRequestBodyCollection:
    info: Optional[CreateCollectionRequestBodyCollectionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    item: Optional[List[CreateCollectionRequestBodyCollectionItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclass
class CreateCollectionRequestBody:
    collection: Optional[CreateCollectionRequestBodyCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclass
class CreateCollection200ApplicationJSONCollection:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class CreateCollection200ApplicationJSON:
    collection: Optional[CreateCollection200ApplicationJSONCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclass
class CreateCollection400ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class CreateCollection400ApplicationJSON:
    error: Optional[CreateCollection400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class CreateCollectionRequest:
    request: Optional[CreateCollectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    create_collection_200_application_json_object: Optional[CreateCollection200ApplicationJSON] = field(default=None)
    create_collection_400_application_json_object: Optional[CreateCollection400ApplicationJSON] = field(default=None)
    
