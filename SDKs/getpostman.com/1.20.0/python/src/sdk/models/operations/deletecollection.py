from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteCollectionPathParams:
    collection_uid: str = field(metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteCollection200ApplicationJSONCollection:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class DeleteCollection200ApplicationJSON:
    collection: Optional[DeleteCollection200ApplicationJSONCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclass
class DeleteCollection404ApplicationJSONErrorDetails:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclass
class DeleteCollection404ApplicationJSONError:
    details: Optional[DeleteCollection404ApplicationJSONErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class DeleteCollection404ApplicationJSON:
    error: Optional[DeleteCollection404ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class DeleteCollectionRequest:
    path_params: DeleteCollectionPathParams = field()
    

@dataclass
class DeleteCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    delete_collection_200_application_json_object: Optional[DeleteCollection200ApplicationJSON] = field(default=None)
    delete_collection_404_application_json_object: Optional[DeleteCollection404ApplicationJSON] = field(default=None)
    
