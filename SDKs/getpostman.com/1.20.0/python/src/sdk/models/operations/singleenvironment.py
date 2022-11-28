from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SingleEnvironmentPathParams:
    environment_uid: str = field(metadata={'path_param': { 'field_name': 'environment_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SingleEnvironment200ApplicationJSONEnvironmentValues:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    hovered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hovered') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class SingleEnvironment200ApplicationJSONEnvironment:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[List[SingleEnvironment200ApplicationJSONEnvironmentValues]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclass
class SingleEnvironment200ApplicationJSON:
    environment: Optional[SingleEnvironment200ApplicationJSONEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass
class SingleEnvironmentRequest:
    path_params: SingleEnvironmentPathParams = field()
    

@dataclass
class SingleEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    single_environment_200_application_json_object: Optional[SingleEnvironment200ApplicationJSON] = field(default=None)
    
