from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateMockRequestBodyMock:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    

@dataclass_json
@dataclass
class CreateMockRequestBody:
    mock: Optional[CreateMockRequestBodyMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class CreateMockRequest:
    request: Optional[CreateMockRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateMock200ApplicationJSONMock:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mock_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mockUrl' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class CreateMock200ApplicationJSON:
    mock: Optional[CreateMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class CreateMockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_mock_200_application_json_object: Optional[CreateMock200ApplicationJSON] = field(default=None)
    
