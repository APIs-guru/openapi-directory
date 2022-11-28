from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteSessionUsingGetQueryParams:
    session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sessionID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteSessionUsingGetRequest:
    query_params: DeleteSessionUsingGetQueryParams = field()
    

@dataclass
class DeleteSessionUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    delete_session_using_get_200_application_json_object: Optional[DeleteSessionUsingGet200ApplicationJSON] = field(default=None)
    delete_session_using_get_400_application_json_object: Optional[DeleteSessionUsingGet400ApplicationJSON] = field(default=None)
    delete_session_using_get_401_application_json_object: Optional[DeleteSessionUsingGet401ApplicationJSON] = field(default=None)
    delete_session_using_get_500_application_json_object: Optional[DeleteSessionUsingGet500ApplicationJSON] = field(default=None)
    
