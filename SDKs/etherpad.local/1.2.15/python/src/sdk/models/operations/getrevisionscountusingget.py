from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetRevisionsCountUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingGet200ApplicationJSONData:
    revisions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetRevisionsCountUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetRevisionsCountUsingGetRequest:
    query_params: GetRevisionsCountUsingGetQueryParams = field()
    

@dataclass
class GetRevisionsCountUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    get_revisions_count_using_get_200_application_json_object: Optional[GetRevisionsCountUsingGet200ApplicationJSON] = field(default=None)
    get_revisions_count_using_get_400_application_json_object: Optional[GetRevisionsCountUsingGet400ApplicationJSON] = field(default=None)
    get_revisions_count_using_get_401_application_json_object: Optional[GetRevisionsCountUsingGet401ApplicationJSON] = field(default=None)
    get_revisions_count_using_get_500_application_json_object: Optional[GetRevisionsCountUsingGet500ApplicationJSON] = field(default=None)
    
