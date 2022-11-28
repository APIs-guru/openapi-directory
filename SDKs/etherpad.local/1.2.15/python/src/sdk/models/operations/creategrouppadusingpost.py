from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateGroupPadUsingPostQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    pad_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padName', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CreateGroupPadUsingPostRequest:
    query_params: CreateGroupPadUsingPostQueryParams = field()
    

@dataclass
class CreateGroupPadUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    create_group_pad_using_post_200_application_json_object: Optional[CreateGroupPadUsingPost200ApplicationJSON] = field(default=None)
    create_group_pad_using_post_400_application_json_object: Optional[CreateGroupPadUsingPost400ApplicationJSON] = field(default=None)
    create_group_pad_using_post_401_application_json_object: Optional[CreateGroupPadUsingPost401ApplicationJSON] = field(default=None)
    create_group_pad_using_post_500_application_json_object: Optional[CreateGroupPadUsingPost500ApplicationJSON] = field(default=None)
    
