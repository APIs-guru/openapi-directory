from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCustomFieldPathParams:
    custom_field_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldRequest:
    path_params: GetCustomFieldPathParams = field(default=None)
    query_params: GetCustomFieldQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCustomField200ApplicationJSON:
    data: Optional[shared.CustomFieldResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetCustomFieldResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_custom_field_200_application_json_object: Optional[GetCustomField200ApplicationJSON] = field(default=None)
    
