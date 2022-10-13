from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCustomFieldSettingsForProjectPathParams:
    project_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldSettingsForProjectQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldSettingsForProjectRequest:
    path_params: GetCustomFieldSettingsForProjectPathParams = field(default=None)
    query_params: GetCustomFieldSettingsForProjectQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCustomFieldSettingsForProject200ApplicationJSON:
    data: Optional[List[shared.CustomFieldSettingResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetCustomFieldSettingsForProjectResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_custom_field_settings_for_project_200_application_json_object: Optional[GetCustomFieldSettingsForProject200ApplicationJSON] = field(default=None)
    
