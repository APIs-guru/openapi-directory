from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddCustomFieldSettingForProjectPathParams:
    project_gid: str = field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddCustomFieldSettingForProjectQueryParams:
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddCustomFieldSettingForProjectRequestBody:
    data: Optional[shared.AddCustomFieldSettingRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddCustomFieldSettingForProject200ApplicationJSON:
    data: Optional[shared.CustomFieldSettingResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddCustomFieldSettingForProjectRequest:
    path_params: AddCustomFieldSettingForProjectPathParams = field()
    query_params: AddCustomFieldSettingForProjectQueryParams = field()
    request: AddCustomFieldSettingForProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddCustomFieldSettingForProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_custom_field_setting_for_project_200_application_json_object: Optional[AddCustomFieldSettingForProject200ApplicationJSON] = field(default=None)
    
