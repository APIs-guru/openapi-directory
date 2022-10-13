from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import messagegroup


@dataclass_json
@dataclass
class PromptSpecification:
    allow_interrupt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowInterrupt' }})
    max_retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetries' }})
    message_groups: List[messagegroup.MessageGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageGroups' }})
    
