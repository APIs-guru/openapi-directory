from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class SingleCollectionPathParams:
    collection_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class SingleCollectionRequest:
    path_params: SingleCollectionPathParams = field(default=None)
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollectionInfo:
    postman_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_postman_id' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollectionItemEventScript:
    exec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exec' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollectionItemEvent:
    listen: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen' }})
    script: Optional[SingleCollection200ApplicationJSONCollectionItemEventScript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollectionItemRequestBody:
    formdata: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formdata' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollectionItemRequestHeader:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollectionItemRequest:
    body: Optional[SingleCollection200ApplicationJSONCollectionItemRequestBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    header: Optional[List[SingleCollection200ApplicationJSONCollectionItemRequestHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollectionItem:
    event: Optional[List[SingleCollection200ApplicationJSONCollectionItemEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    request: Optional[SingleCollection200ApplicationJSONCollectionItemRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    response: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSONCollection:
    info: Optional[SingleCollection200ApplicationJSONCollectionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    item: Optional[List[SingleCollection200ApplicationJSONCollectionItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    variables: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    

@dataclass_json
@dataclass
class SingleCollection200ApplicationJSON:
    collection: Optional[SingleCollection200ApplicationJSONCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    

@dataclass
class SingleCollectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    single_collection_200_application_json_object: Optional[SingleCollection200ApplicationJSON] = field(default=None)
    
