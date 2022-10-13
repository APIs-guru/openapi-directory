from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateAPIQueryParams:
    workspace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateAPIRequestBodyAPI:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    

@dataclass_json
@dataclass
class CreateAPIRequestBody:
    api: Optional[CreateAPIRequestBodyAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    

@dataclass
class CreateAPIRequest:
    query_params: CreateAPIQueryParams = field(default=None)
    request: Optional[CreateAPIRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateAPI200ApplicationJSONAPI:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    

@dataclass_json
@dataclass
class CreateAPI200ApplicationJSON:
    api: Optional[CreateAPI200ApplicationJSONAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    

@dataclass
class CreateAPIResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_api_200_application_json_object: Optional[CreateAPI200ApplicationJSON] = field(default=None)
    
