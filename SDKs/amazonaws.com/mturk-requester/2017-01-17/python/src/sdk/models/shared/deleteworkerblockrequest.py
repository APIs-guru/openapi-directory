from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteWorkerBlockRequest:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    worker_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
