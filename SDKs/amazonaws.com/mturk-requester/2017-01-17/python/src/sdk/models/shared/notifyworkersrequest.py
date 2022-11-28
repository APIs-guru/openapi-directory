from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotifyWorkersRequest:
    message_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageText') }})
    subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    worker_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerIds') }})
    
