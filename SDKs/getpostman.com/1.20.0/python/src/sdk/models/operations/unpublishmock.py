from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class UnpublishMockPathParams:
    mock_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnpublishMockRequest:
    path_params: UnpublishMockPathParams = field(default=None)
    

@dataclass_json
@dataclass
class UnpublishMock200ApplicationJSONMock:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UnpublishMock200ApplicationJSON:
    mock: Optional[UnpublishMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class UnpublishMockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unpublish_mock_200_application_json_object: Optional[UnpublishMock200ApplicationJSON] = field(default=None)
    
