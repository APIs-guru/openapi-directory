from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateEnumOptionForCustomFieldPathParams:
    custom_field_gid: str = field(metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEnumOptionForCustomFieldQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateEnumOptionForCustomFieldRequestBodyInput:
    data: Optional[shared.EnumOptionRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateEnumOptionForCustomField201ApplicationJSON:
    data: Optional[shared.EnumOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateEnumOptionForCustomFieldRequest:
    path_params: CreateEnumOptionForCustomFieldPathParams = field()
    query_params: CreateEnumOptionForCustomFieldQueryParams = field()
    request: Optional[CreateEnumOptionForCustomFieldRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEnumOptionForCustomFieldResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_enum_option_for_custom_field_201_application_json_object: Optional[CreateEnumOptionForCustomField201ApplicationJSON] = field(default=None)
    
