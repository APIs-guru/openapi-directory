from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteAnAPIPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnAPIRequest:
    path_params: DeleteAnAPIPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteAnAPI200ApplicationJSONAPI:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class DeleteAnAPI200ApplicationJSON:
    api: Optional[DeleteAnAPI200ApplicationJSONAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    

@dataclass
class DeleteAnAPIResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_an_api_200_application_json_object: Optional[DeleteAnAPI200ApplicationJSON] = field(default=None)
    
