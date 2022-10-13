from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateAPIVersionPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAPIVersionRequestBodyVersionSourceRelations:
    documentation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    mock: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mock' }})
    monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass_json
@dataclass
class CreateAPIVersionRequestBodyVersionSource:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    relations: Optional[CreateAPIVersionRequestBodyVersionSourceRelations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relations' }})
    schema: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

@dataclass_json
@dataclass
class CreateAPIVersionRequestBodyVersion:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source: Optional[CreateAPIVersionRequestBodyVersionSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass_json
@dataclass
class CreateAPIVersionRequestBody:
    version: Optional[CreateAPIVersionRequestBodyVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class CreateAPIVersionRequest:
    path_params: CreateAPIVersionPathParams = field(default=None)
    request: Optional[CreateAPIVersionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateAPIVersion200ApplicationJSONVersion:
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CreateAPIVersion200ApplicationJSON:
    version: Optional[CreateAPIVersion200ApplicationJSONVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class CreateAPIVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_api_version_200_application_json_object: Optional[CreateAPIVersion200ApplicationJSON] = field(default=None)
    
