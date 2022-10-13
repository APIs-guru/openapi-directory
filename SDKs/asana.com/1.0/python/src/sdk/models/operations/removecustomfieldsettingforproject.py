from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RemoveCustomFieldSettingForProjectPathParams:
    project_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveCustomFieldSettingForProjectQueryParams:
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveCustomFieldSettingForProjectRequestBody:
    data: Optional[shared.RemoveCustomFieldSettingRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveCustomFieldSettingForProjectRequest:
    path_params: RemoveCustomFieldSettingForProjectPathParams = field(default=None)
    query_params: RemoveCustomFieldSettingForProjectQueryParams = field(default=None)
    request: RemoveCustomFieldSettingForProjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class RemoveCustomFieldSettingForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveCustomFieldSettingForProjectResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    remove_custom_field_setting_for_project_200_application_json_object: Optional[RemoveCustomFieldSettingForProject200ApplicationJSON] = field(default=None)
    
