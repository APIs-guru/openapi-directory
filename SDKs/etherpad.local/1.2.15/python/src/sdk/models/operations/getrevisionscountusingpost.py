from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetRevisionsCountUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingPost200ApplicationJSONData:
    revisions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetRevisionsCountUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionsCountUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetRevisionsCountUsingPostRequest:
    query_params: GetRevisionsCountUsingPostQueryParams = field()
    

@dataclass
class GetRevisionsCountUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    get_revisions_count_using_post_200_application_json_object: Optional[GetRevisionsCountUsingPost200ApplicationJSON] = field(default=None)
    get_revisions_count_using_post_400_application_json_object: Optional[GetRevisionsCountUsingPost400ApplicationJSON] = field(default=None)
    get_revisions_count_using_post_401_application_json_object: Optional[GetRevisionsCountUsingPost401ApplicationJSON] = field(default=None)
    get_revisions_count_using_post_500_application_json_object: Optional[GetRevisionsCountUsingPost500ApplicationJSON] = field(default=None)
    
