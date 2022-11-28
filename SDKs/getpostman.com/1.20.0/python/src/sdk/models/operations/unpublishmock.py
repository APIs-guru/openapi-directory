from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UnpublishMockPathParams:
    mock_uid: str = field(metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UnpublishMock200ApplicationJSONMock:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UnpublishMock200ApplicationJSON:
    mock: Optional[UnpublishMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    

@dataclass
class UnpublishMockRequest:
    path_params: UnpublishMockPathParams = field()
    

@dataclass
class UnpublishMockResponse:
    content_type: str = field()
    status_code: int = field()
    unpublish_mock_200_application_json_object: Optional[UnpublishMock200ApplicationJSON] = field(default=None)
    
