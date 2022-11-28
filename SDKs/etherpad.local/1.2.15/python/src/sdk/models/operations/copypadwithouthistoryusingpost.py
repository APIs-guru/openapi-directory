from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CopyPadWithoutHistoryUsingPostQueryParams:
    destination_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destinationID', 'style': 'form', 'explode': True }})
    force: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CopyPadWithoutHistoryUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CopyPadWithoutHistoryUsingPostRequest:
    query_params: CopyPadWithoutHistoryUsingPostQueryParams = field()
    

@dataclass
class CopyPadWithoutHistoryUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    copy_pad_without_history_using_post_200_application_json_object: Optional[CopyPadWithoutHistoryUsingPost200ApplicationJSON] = field(default=None)
    copy_pad_without_history_using_post_400_application_json_object: Optional[CopyPadWithoutHistoryUsingPost400ApplicationJSON] = field(default=None)
    copy_pad_without_history_using_post_401_application_json_object: Optional[CopyPadWithoutHistoryUsingPost401ApplicationJSON] = field(default=None)
    copy_pad_without_history_using_post_500_application_json_object: Optional[CopyPadWithoutHistoryUsingPost500ApplicationJSON] = field(default=None)
    
