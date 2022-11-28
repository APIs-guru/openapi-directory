from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateSchemaPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSchemaRequestBodySchema:
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateSchemaRequestBody:
    schema: Optional[CreateSchemaRequestBodySchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclass
class CreateSchema200ApplicationJSONSchema:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateBy') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class CreateSchema200ApplicationJSON:
    schema: Optional[CreateSchema200ApplicationJSONSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass
class CreateSchemaRequest:
    path_params: CreateSchemaPathParams = field()
    request: Optional[CreateSchemaRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    create_schema_200_application_json_object: Optional[CreateSchema200ApplicationJSON] = field(default=None)
    
