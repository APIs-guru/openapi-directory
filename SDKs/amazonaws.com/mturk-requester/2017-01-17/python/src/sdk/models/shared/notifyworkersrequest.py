from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotifyWorkersRequest:
    message_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageText' }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    worker_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerIds' }})
    
