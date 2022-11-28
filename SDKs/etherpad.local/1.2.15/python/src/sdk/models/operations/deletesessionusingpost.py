from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteSessionUsingPostQueryParams:
    session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sessionID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteSessionUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteSessionUsingPostRequest:
    query_params: DeleteSessionUsingPostQueryParams = field()
    

@dataclass
class DeleteSessionUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    delete_session_using_post_200_application_json_object: Optional[DeleteSessionUsingPost200ApplicationJSON] = field(default=None)
    delete_session_using_post_400_application_json_object: Optional[DeleteSessionUsingPost400ApplicationJSON] = field(default=None)
    delete_session_using_post_401_application_json_object: Optional[DeleteSessionUsingPost401ApplicationJSON] = field(default=None)
    delete_session_using_post_500_application_json_object: Optional[DeleteSessionUsingPost500ApplicationJSON] = field(default=None)
    
