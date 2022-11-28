from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateAnAPIPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAnAPIRequestBodyAPI:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateAnAPIRequestBody:
    api: Optional[UpdateAnAPIRequestBodyAPI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    

@dataclass_json
@dataclass
class UpdateAnAPI200ApplicationJSONAPI:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class UpdateAnAPI200ApplicationJSON:
    api: Optional[UpdateAnAPI200ApplicationJSONAPI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    

@dataclass
class UpdateAnAPIRequest:
    path_params: UpdateAnAPIPathParams = field()
    request: Optional[UpdateAnAPIRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAnAPIResponse:
    content_type: str = field()
    status_code: int = field()
    update_an_api_200_application_json_object: Optional[UpdateAnAPI200ApplicationJSON] = field(default=None)
    
