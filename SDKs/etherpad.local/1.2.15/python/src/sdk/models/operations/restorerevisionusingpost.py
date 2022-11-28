from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RestoreRevisionUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rev', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RestoreRevisionUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class RestoreRevisionUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class RestoreRevisionUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class RestoreRevisionUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class RestoreRevisionUsingPostRequest:
    query_params: RestoreRevisionUsingPostQueryParams = field()
    

@dataclass
class RestoreRevisionUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    restore_revision_using_post_200_application_json_object: Optional[RestoreRevisionUsingPost200ApplicationJSON] = field(default=None)
    restore_revision_using_post_400_application_json_object: Optional[RestoreRevisionUsingPost400ApplicationJSON] = field(default=None)
    restore_revision_using_post_401_application_json_object: Optional[RestoreRevisionUsingPost401ApplicationJSON] = field(default=None)
    restore_revision_using_post_500_application_json_object: Optional[RestoreRevisionUsingPost500ApplicationJSON] = field(default=None)
    
