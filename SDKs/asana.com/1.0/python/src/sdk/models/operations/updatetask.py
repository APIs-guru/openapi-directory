from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateTaskPathParams:
    task_gid: str = field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateTaskRequestBodyInput:
    data: Optional[shared.TaskRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class UpdateTask200ApplicationJSON:
    data: Optional[shared.TaskResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field()
    query_params: UpdateTaskQueryParams = field()
    request: UpdateTaskRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_task_200_application_json_object: Optional[UpdateTask200ApplicationJSON] = field(default=None)
    
