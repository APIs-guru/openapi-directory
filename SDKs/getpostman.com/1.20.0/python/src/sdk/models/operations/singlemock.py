from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class SingleMockPathParams:
    mock_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class SingleMockRequest:
    path_params: SingleMockPathParams = field(default=None)
    

@dataclass_json
@dataclass
class SingleMock200ApplicationJSONMock:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mock_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mockUrl' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class SingleMock200ApplicationJSON:
    mock: Optional[SingleMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class SingleMockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    single_mock_200_application_json_object: Optional[SingleMock200ApplicationJSON] = field(default=None)
    
