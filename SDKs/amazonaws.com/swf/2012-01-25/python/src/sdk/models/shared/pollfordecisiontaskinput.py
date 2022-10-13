from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tasklist


@dataclass_json
@dataclass
class PollForDecisionTaskInput:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    maximum_page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPageSize' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverseOrder' }})
    task_list: tasklist.TaskList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    
