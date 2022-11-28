from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetSavedRevisionsCountUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetSavedRevisionsCountUsingGetRequest:
    query_params: GetSavedRevisionsCountUsingGetQueryParams = field()
    

@dataclass
class GetSavedRevisionsCountUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    get_saved_revisions_count_using_get_200_application_json_object: Optional[GetSavedRevisionsCountUsingGet200ApplicationJSON] = field(default=None)
    get_saved_revisions_count_using_get_400_application_json_object: Optional[GetSavedRevisionsCountUsingGet400ApplicationJSON] = field(default=None)
    get_saved_revisions_count_using_get_401_application_json_object: Optional[GetSavedRevisionsCountUsingGet401ApplicationJSON] = field(default=None)
    get_saved_revisions_count_using_get_500_application_json_object: Optional[GetSavedRevisionsCountUsingGet500ApplicationJSON] = field(default=None)
    
