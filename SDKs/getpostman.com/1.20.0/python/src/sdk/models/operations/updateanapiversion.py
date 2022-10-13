from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateAnAPIVersionPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersionRequestBodyVersion:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersionRequestBody:
    version: Optional[UpdateAnAPIVersionRequestBodyVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class UpdateAnAPIVersionRequest:
    path_params: UpdateAnAPIVersionPathParams = field(default=None)
    request: Optional[UpdateAnAPIVersionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersion200ApplicationJSONVersion:
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersion200ApplicationJSON:
    version: Optional[UpdateAnAPIVersion200ApplicationJSONVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class UpdateAnAPIVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_an_api_version_200_application_json_object: Optional[UpdateAnAPIVersion200ApplicationJSON] = field(default=None)
    
