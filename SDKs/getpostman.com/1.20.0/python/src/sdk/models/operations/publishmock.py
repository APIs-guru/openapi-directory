from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PublishMockPathParams:
    mock_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishMockRequest:
    path_params: PublishMockPathParams = field(default=None)
    

@dataclass_json
@dataclass
class PublishMock200ApplicationJSONMock:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PublishMock200ApplicationJSON:
    mock: Optional[PublishMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class PublishMockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    publish_mock_200_application_json_object: Optional[PublishMock200ApplicationJSON] = field(default=None)
    
