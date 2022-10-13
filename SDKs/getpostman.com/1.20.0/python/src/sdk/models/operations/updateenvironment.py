from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateEnvironmentPathParams:
    environment_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateEnvironmentRequestBodyEnvironmentValues:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateEnvironmentRequestBodyEnvironment:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    values: Optional[List[UpdateEnvironmentRequestBodyEnvironmentValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    

@dataclass_json
@dataclass
class UpdateEnvironmentRequestBody:
    environment: Optional[UpdateEnvironmentRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    

@dataclass
class UpdateEnvironmentRequest:
    path_params: UpdateEnvironmentPathParams = field(default=None)
    request: Optional[UpdateEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateEnvironment200ApplicationJSONEnvironment:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class UpdateEnvironment200ApplicationJSON:
    environment: Optional[UpdateEnvironment200ApplicationJSONEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    

@dataclass_json
@dataclass
class UpdateEnvironment400ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateEnvironment400ApplicationJSON:
    error: Optional[UpdateEnvironment400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class UpdateEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_environment_200_application_json_object: Optional[UpdateEnvironment200ApplicationJSON] = field(default=None)
    update_environment_400_application_json_object: Optional[UpdateEnvironment400ApplicationJSON] = field(default=None)
    
