from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteEnvironmentPathParams:
    environment_uid: str = field(metadata={'path_param': { 'field_name': 'environment_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteEnvironment200ApplicationJSONEnvironment:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class DeleteEnvironment200ApplicationJSON:
    environment: Optional[DeleteEnvironment200ApplicationJSONEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass_json
@dataclass
class DeleteEnvironment404ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class DeleteEnvironment404ApplicationJSON:
    error: Optional[DeleteEnvironment404ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class DeleteEnvironmentRequest:
    path_params: DeleteEnvironmentPathParams = field()
    

@dataclass
class DeleteEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    delete_environment_200_application_json_object: Optional[DeleteEnvironment200ApplicationJSON] = field(default=None)
    delete_environment_404_application_json_object: Optional[DeleteEnvironment404ApplicationJSON] = field(default=None)
    
