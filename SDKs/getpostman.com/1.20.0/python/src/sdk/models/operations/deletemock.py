from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteMockPathParams:
    mock_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMockRequest:
    path_params: DeleteMockPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteMock200ApplicationJSONMock:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class DeleteMock200ApplicationJSON:
    mock: Optional[DeleteMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class DeleteMockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_mock_200_application_json_object: Optional[DeleteMock200ApplicationJSON] = field(default=None)
    
