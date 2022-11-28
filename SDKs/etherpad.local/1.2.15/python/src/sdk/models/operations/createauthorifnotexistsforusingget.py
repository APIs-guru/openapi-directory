from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateAuthorIfNotExistsForUsingGetQueryParams:
    author_mapper: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorMapper', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateAuthorIfNotExistsForUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CreateAuthorIfNotExistsForUsingGetRequest:
    query_params: CreateAuthorIfNotExistsForUsingGetQueryParams = field()
    

@dataclass
class CreateAuthorIfNotExistsForUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    create_author_if_not_exists_for_using_get_200_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet200ApplicationJSON] = field(default=None)
    create_author_if_not_exists_for_using_get_400_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet400ApplicationJSON] = field(default=None)
    create_author_if_not_exists_for_using_get_401_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet401ApplicationJSON] = field(default=None)
    create_author_if_not_exists_for_using_get_500_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet500ApplicationJSON] = field(default=None)
    
