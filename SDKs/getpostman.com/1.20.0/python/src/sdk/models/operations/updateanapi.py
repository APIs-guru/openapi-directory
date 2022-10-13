from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateAnAPIPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAnAPIRequestBodyAPI:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateAnAPIRequestBody:
    api: Optional[UpdateAnAPIRequestBodyAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    

@dataclass
class UpdateAnAPIRequest:
    path_params: UpdateAnAPIPathParams = field(default=None)
    request: Optional[UpdateAnAPIRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateAnAPI200ApplicationJSONAPI:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    

@dataclass_json
@dataclass
class UpdateAnAPI200ApplicationJSON:
    api: Optional[UpdateAnAPI200ApplicationJSONAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    

@dataclass
class UpdateAnAPIResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_an_api_200_application_json_object: Optional[UpdateAnAPI200ApplicationJSON] = field(default=None)
    
