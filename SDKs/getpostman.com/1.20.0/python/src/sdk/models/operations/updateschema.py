from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateSchemaPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    schema_id: str = field(default=None, metadata={'path_param': { 'field_name': 'schemaId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSchemaRequestBodySchema:
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateSchemaRequestBody:
    schema: Optional[UpdateSchemaRequestBodySchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

@dataclass
class UpdateSchemaRequest:
    path_params: UpdateSchemaPathParams = field(default=None)
    request: Optional[UpdateSchemaRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateSchema200ApplicationJSONSchema:
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
class UpdateSchema200ApplicationJSON:
    schema: Optional[UpdateSchema200ApplicationJSONSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

@dataclass
class UpdateSchemaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_schema_200_application_json_object: Optional[UpdateSchema200ApplicationJSON] = field(default=None)
    
