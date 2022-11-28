from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class MovePadUsingGetQueryParams:
    destination_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destinationID', 'style': 'form', 'explode': True }})
    force: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class MovePadUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class MovePadUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class MovePadUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class MovePadUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class MovePadUsingGetRequest:
    query_params: MovePadUsingGetQueryParams = field()
    

@dataclass
class MovePadUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    move_pad_using_get_200_application_json_object: Optional[MovePadUsingGet200ApplicationJSON] = field(default=None)
    move_pad_using_get_400_application_json_object: Optional[MovePadUsingGet400ApplicationJSON] = field(default=None)
    move_pad_using_get_401_application_json_object: Optional[MovePadUsingGet401ApplicationJSON] = field(default=None)
    move_pad_using_get_500_application_json_object: Optional[MovePadUsingGet500ApplicationJSON] = field(default=None)
    
