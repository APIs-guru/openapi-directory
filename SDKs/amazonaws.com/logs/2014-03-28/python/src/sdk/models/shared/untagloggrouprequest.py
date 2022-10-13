from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UntagLogGroupRequest:
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    tags: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
