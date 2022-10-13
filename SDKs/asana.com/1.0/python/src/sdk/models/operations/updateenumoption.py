from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateEnumOptionPathParams:
    enum_option_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'enum_option_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnumOptionQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateEnumOptionRequestBody:
    data: Optional[shared.EnumOptionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class UpdateEnumOptionRequest:
    path_params: UpdateEnumOptionPathParams = field(default=None)
    query_params: UpdateEnumOptionQueryParams = field(default=None)
    request: Optional[UpdateEnumOptionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateEnumOption200ApplicationJSON:
    data: Optional[shared.EnumOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class UpdateEnumOptionResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    update_enum_option_200_application_json_object: Optional[UpdateEnumOption200ApplicationJSON] = field(default=None)
    
