from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateEnumOptionPathParams:
    enum_option_gid: str = field(metadata={'path_param': { 'field_name': 'enum_option_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnumOptionQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateEnumOptionRequestBodyInput:
    data: Optional[shared.EnumOptionRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class UpdateEnumOption200ApplicationJSON:
    data: Optional[shared.EnumOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class UpdateEnumOptionRequest:
    path_params: UpdateEnumOptionPathParams = field()
    query_params: UpdateEnumOptionQueryParams = field()
    request: Optional[UpdateEnumOptionRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEnumOptionResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_enum_option_200_application_json_object: Optional[UpdateEnumOption200ApplicationJSON] = field(default=None)
    
