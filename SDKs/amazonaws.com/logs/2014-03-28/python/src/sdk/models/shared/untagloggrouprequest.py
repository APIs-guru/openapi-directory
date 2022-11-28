from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UntagLogGroupRequest:
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    tags: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
