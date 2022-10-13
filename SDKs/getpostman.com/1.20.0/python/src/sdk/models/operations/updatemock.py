from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateMockPathParams:
    mock_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateMockRequestBodyMock:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    version_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionTag' }})
    

@dataclass_json
@dataclass
class UpdateMockRequestBody:
    mock: Optional[UpdateMockRequestBodyMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class UpdateMockRequest:
    path_params: UpdateMockPathParams = field(default=None)
    request: Optional[UpdateMockRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateMock200ApplicationJSONMockConfig:
    headers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    match_body: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchBody' }})
    match_query_params: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchQueryParams' }})
    match_wildcards: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchWildcards' }})
    

@dataclass_json
@dataclass
class UpdateMock200ApplicationJSONMock:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    config: Optional[UpdateMock200ApplicationJSONMockConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mock_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mockUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class UpdateMock200ApplicationJSON:
    mock: Optional[UpdateMock200ApplicationJSONMock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    

@dataclass
class UpdateMockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_mock_200_application_json_object: Optional[UpdateMock200ApplicationJSON] = field(default=None)
    
