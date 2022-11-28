from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetReadOnlyIDUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingPost200ApplicationJSONData:
    read_only_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnlyID') }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetReadOnlyIDUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetReadOnlyIDUsingPostRequest:
    query_params: GetReadOnlyIDUsingPostQueryParams = field()
    

@dataclass
class GetReadOnlyIDUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    get_read_only_id_using_post_200_application_json_object: Optional[GetReadOnlyIDUsingPost200ApplicationJSON] = field(default=None)
    get_read_only_id_using_post_400_application_json_object: Optional[GetReadOnlyIDUsingPost400ApplicationJSON] = field(default=None)
    get_read_only_id_using_post_401_application_json_object: Optional[GetReadOnlyIDUsingPost401ApplicationJSON] = field(default=None)
    get_read_only_id_using_post_500_application_json_object: Optional[GetReadOnlyIDUsingPost500ApplicationJSON] = field(default=None)
    
