from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateTagPathParams:
    tag_gid: str = field(metadata={'path_param': { 'field_name': 'tag_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateTag200ApplicationJSON:
    data: Optional[shared.TagResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class UpdateTagRequest:
    path_params: UpdateTagPathParams = field()
    query_params: UpdateTagQueryParams = field()
    

@dataclass
class UpdateTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_tag_200_application_json_object: Optional[UpdateTag200ApplicationJSON] = field(default=None)
    
