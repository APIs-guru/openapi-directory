from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SingleMockPathParams:
    mock_uid: str = field(metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SingleMock200ApplicationJSONMock:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mock_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mockUrl') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class SingleMock200ApplicationJSON:
    mock: Optional[SingleMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    

@dataclass
class SingleMockRequest:
    path_params: SingleMockPathParams = field()
    

@dataclass
class SingleMockResponse:
    content_type: str = field()
    status_code: int = field()
    single_mock_200_application_json_object: Optional[SingleMock200ApplicationJSON] = field(default=None)
    
