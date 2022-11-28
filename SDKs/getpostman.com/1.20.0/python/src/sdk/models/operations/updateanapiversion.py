from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateAnAPIVersionPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersionRequestBodyVersion:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersionRequestBody:
    version: Optional[UpdateAnAPIVersionRequestBodyVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersion200ApplicationJSONVersion:
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclass
class UpdateAnAPIVersion200ApplicationJSON:
    version: Optional[UpdateAnAPIVersion200ApplicationJSONVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass
class UpdateAnAPIVersionRequest:
    path_params: UpdateAnAPIVersionPathParams = field()
    request: Optional[UpdateAnAPIVersionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAnAPIVersionResponse:
    content_type: str = field()
    status_code: int = field()
    update_an_api_version_200_application_json_object: Optional[UpdateAnAPIVersion200ApplicationJSON] = field(default=None)
    
