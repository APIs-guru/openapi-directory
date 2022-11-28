from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeCommunicationsRequest:
    case_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseId') }})
    after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterTime') }})
    before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beforeTime') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
