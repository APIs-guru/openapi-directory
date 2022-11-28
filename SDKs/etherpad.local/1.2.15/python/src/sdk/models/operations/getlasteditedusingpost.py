from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLastEditedUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingPost200ApplicationJSONData:
    last_edited: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEdited') }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetLastEditedUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetLastEditedUsingPostRequest:
    query_params: GetLastEditedUsingPostQueryParams = field()
    

@dataclass
class GetLastEditedUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    get_last_edited_using_post_200_application_json_object: Optional[GetLastEditedUsingPost200ApplicationJSON] = field(default=None)
    get_last_edited_using_post_400_application_json_object: Optional[GetLastEditedUsingPost400ApplicationJSON] = field(default=None)
    get_last_edited_using_post_401_application_json_object: Optional[GetLastEditedUsingPost401ApplicationJSON] = field(default=None)
    get_last_edited_using_post_500_application_json_object: Optional[GetLastEditedUsingPost500ApplicationJSON] = field(default=None)
    
