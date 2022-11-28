from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagLogGroupRequest:
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    tags: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
