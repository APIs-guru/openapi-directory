from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTemplateSchemaPathParams:
    template_id: str = field(metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTemplateSchemaSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class GetTemplateSchemaTemplateSchema:
    dollar_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$schema') }})
    additional_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProperties') }})
    definitions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    required: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class GetTemplateSchemaRequest:
    path_params: GetTemplateSchemaPathParams = field()
    security: GetTemplateSchemaSecurity = field()
    

@dataclass
class GetTemplateSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    template_schema: Optional[GetTemplateSchemaTemplateSchema] = field(default=None)
    
