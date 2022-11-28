from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteAnAPIVersionPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteAnAPIVersion200ApplicationJSONVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class DeleteAnAPIVersion200ApplicationJSON:
    version: Optional[DeleteAnAPIVersion200ApplicationJSONVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass
class DeleteAnAPIVersionRequest:
    path_params: DeleteAnAPIVersionPathParams = field()
    

@dataclass
class DeleteAnAPIVersionResponse:
    content_type: str = field()
    status_code: int = field()
    delete_an_api_version_200_application_json_object: Optional[DeleteAnAPIVersion200ApplicationJSON] = field(default=None)
    
