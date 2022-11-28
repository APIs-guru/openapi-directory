from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateEnvironmentRequestBodyEnvironmentValues:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class CreateEnvironmentRequestBodyEnvironment:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[List[CreateEnvironmentRequestBodyEnvironmentValues]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclass
class CreateEnvironmentRequestBody:
    environment: Optional[CreateEnvironmentRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass_json
@dataclass
class CreateEnvironment200ApplicationJSONEnvironment:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class CreateEnvironment200ApplicationJSON:
    environment: Optional[CreateEnvironment200ApplicationJSONEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass_json
@dataclass
class CreateEnvironment400ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class CreateEnvironment400ApplicationJSON:
    error: Optional[CreateEnvironment400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class CreateEnvironmentRequest:
    request: Optional[CreateEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    create_environment_200_application_json_object: Optional[CreateEnvironment200ApplicationJSON] = field(default=None)
    create_environment_400_application_json_object: Optional[CreateEnvironment400ApplicationJSON] = field(default=None)
    
