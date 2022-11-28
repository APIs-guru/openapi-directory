from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteGroupUsingPostQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DeleteGroupUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteGroupUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteGroupUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteGroupUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteGroupUsingPostRequest:
    query_params: DeleteGroupUsingPostQueryParams = field()
    

@dataclass
class DeleteGroupUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    delete_group_using_post_200_application_json_object: Optional[DeleteGroupUsingPost200ApplicationJSON] = field(default=None)
    delete_group_using_post_400_application_json_object: Optional[DeleteGroupUsingPost400ApplicationJSON] = field(default=None)
    delete_group_using_post_401_application_json_object: Optional[DeleteGroupUsingPost401ApplicationJSON] = field(default=None)
    delete_group_using_post_500_application_json_object: Optional[DeleteGroupUsingPost500ApplicationJSON] = field(default=None)
    
