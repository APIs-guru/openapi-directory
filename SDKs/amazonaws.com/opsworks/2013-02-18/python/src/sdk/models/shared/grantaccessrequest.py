from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GrantAccessRequest:
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    valid_for_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidForInMinutes') }})
    
