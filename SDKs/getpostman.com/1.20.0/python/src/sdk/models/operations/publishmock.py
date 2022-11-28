from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PublishMockPathParams:
    mock_uid: str = field(metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PublishMock200ApplicationJSONMock:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PublishMock200ApplicationJSON:
    mock: Optional[PublishMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    

@dataclass
class PublishMockRequest:
    path_params: PublishMockPathParams = field()
    

@dataclass
class PublishMockResponse:
    content_type: str = field()
    status_code: int = field()
    publish_mock_200_application_json_object: Optional[PublishMock200ApplicationJSON] = field(default=None)
    
