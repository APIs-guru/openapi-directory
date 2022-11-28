from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetRevisionChangesetUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    rev: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rev', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetRevisionChangesetUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetRevisionChangesetUsingPostRequest:
    query_params: GetRevisionChangesetUsingPostQueryParams = field()
    

@dataclass
class GetRevisionChangesetUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    get_revision_changeset_using_post_200_application_json_object: Optional[GetRevisionChangesetUsingPost200ApplicationJSON] = field(default=None)
    get_revision_changeset_using_post_400_application_json_object: Optional[GetRevisionChangesetUsingPost400ApplicationJSON] = field(default=None)
    get_revision_changeset_using_post_401_application_json_object: Optional[GetRevisionChangesetUsingPost401ApplicationJSON] = field(default=None)
    get_revision_changeset_using_post_500_application_json_object: Optional[GetRevisionChangesetUsingPost500ApplicationJSON] = field(default=None)
    
