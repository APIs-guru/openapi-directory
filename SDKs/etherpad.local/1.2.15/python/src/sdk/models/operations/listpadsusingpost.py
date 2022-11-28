from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ListPadsUsingPostQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ListPadsUsingPost200ApplicationJSONData:
    pad_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padIDs') }})
    

@dataclass_json
@dataclass
class ListPadsUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListPadsUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListPadsUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListPadsUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListPadsUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ListPadsUsingPostRequest:
    query_params: ListPadsUsingPostQueryParams = field()
    

@dataclass
class ListPadsUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    list_pads_using_post_200_application_json_object: Optional[ListPadsUsingPost200ApplicationJSON] = field(default=None)
    list_pads_using_post_400_application_json_object: Optional[ListPadsUsingPost400ApplicationJSON] = field(default=None)
    list_pads_using_post_401_application_json_object: Optional[ListPadsUsingPost401ApplicationJSON] = field(default=None)
    list_pads_using_post_500_application_json_object: Optional[ListPadsUsingPost500ApplicationJSON] = field(default=None)
    
