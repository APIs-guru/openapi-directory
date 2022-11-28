from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ListAuthorsOfPadUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingPost200ApplicationJSONData:
    author_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorIDs') }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListAuthorsOfPadUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ListAuthorsOfPadUsingPostRequest:
    query_params: ListAuthorsOfPadUsingPostQueryParams = field()
    

@dataclass
class ListAuthorsOfPadUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    list_authors_of_pad_using_post_200_application_json_object: Optional[ListAuthorsOfPadUsingPost200ApplicationJSON] = field(default=None)
    list_authors_of_pad_using_post_400_application_json_object: Optional[ListAuthorsOfPadUsingPost400ApplicationJSON] = field(default=None)
    list_authors_of_pad_using_post_401_application_json_object: Optional[ListAuthorsOfPadUsingPost401ApplicationJSON] = field(default=None)
    list_authors_of_pad_using_post_500_application_json_object: Optional[ListAuthorsOfPadUsingPost500ApplicationJSON] = field(default=None)
    
