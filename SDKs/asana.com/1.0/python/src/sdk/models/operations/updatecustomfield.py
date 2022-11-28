from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateCustomFieldPathParams:
    custom_field_gid: str = field(metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomFieldQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateCustomFieldRequestBodyInput:
    data: Optional[shared.CustomFieldRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class UpdateCustomField200ApplicationJSON:
    data: Optional[shared.CustomFieldResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class UpdateCustomFieldRequest:
    path_params: UpdateCustomFieldPathParams = field()
    query_params: UpdateCustomFieldQueryParams = field()
    request: Optional[UpdateCustomFieldRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCustomFieldResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_custom_field_200_application_json_object: Optional[UpdateCustomField200ApplicationJSON] = field(default=None)
    
