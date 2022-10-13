from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import messagegroup


@dataclass_json
@dataclass
class StillWaitingResponseSpecification:
    allow_interrupt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowInterrupt' }})
    frequency_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyInSeconds' }})
    message_groups: List[messagegroup.MessageGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageGroups' }})
    timeout_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInSeconds' }})
    
