from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateEnumOptionForCustomFieldPathParams:
    custom_field_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEnumOptionForCustomFieldQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateEnumOptionForCustomFieldRequestBody:
    data: Optional[shared.EnumOptionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateEnumOptionForCustomFieldRequest:
    path_params: CreateEnumOptionForCustomFieldPathParams = field(default=None)
    query_params: CreateEnumOptionForCustomFieldQueryParams = field(default=None)
    request: Optional[CreateEnumOptionForCustomFieldRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateEnumOptionForCustomField201ApplicationJSON:
    data: Optional[shared.EnumOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateEnumOptionForCustomFieldResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    create_enum_option_for_custom_field_201_application_json_object: Optional[CreateEnumOptionForCustomField201ApplicationJSON] = field(default=None)
    
