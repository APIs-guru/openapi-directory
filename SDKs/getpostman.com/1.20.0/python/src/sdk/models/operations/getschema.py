from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetSchemaPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    schema_id: str = field(default=None, metadata={'path_param': { 'field_name': 'schemaId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchemaRequest:
    path_params: GetSchemaPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSchema200ApplicationJSONSchema:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateBy' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    

@dataclass_json
@dataclass
class GetSchema200ApplicationJSON:
    schema: Optional[GetSchema200ApplicationJSONSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

@dataclass
class GetSchemaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_schema_200_application_json_object: Optional[GetSchema200ApplicationJSON] = field(default=None)
    
