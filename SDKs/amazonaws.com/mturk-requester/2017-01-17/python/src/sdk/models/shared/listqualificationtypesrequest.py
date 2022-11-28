from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListQualificationTypesRequest:
    must_be_requestable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MustBeRequestable') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    must_be_owned_by_caller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MustBeOwnedByCaller') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Query') }})
    
