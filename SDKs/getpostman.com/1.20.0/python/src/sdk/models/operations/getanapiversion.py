from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAnAPIVersionPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnAPIVersionRequest:
    path_params: GetAnAPIVersionPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAnAPIVersion200ApplicationJSONVersion:
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class GetAnAPIVersion200ApplicationJSON:
    version: Optional[GetAnAPIVersion200ApplicationJSONVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class GetAnAPIVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_an_api_version_200_application_json_object: Optional[GetAnAPIVersion200ApplicationJSON] = field(default=None)
    
