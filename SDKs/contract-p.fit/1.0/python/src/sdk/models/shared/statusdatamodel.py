from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StatusDataModel:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    escalate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'escalate' }})
    feedback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    lock: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lock' }})
    ready_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ready_accepted' }})
    ready_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ready_attempts' }})
    reject: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reject' }})
    reject_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reject_accepted' }})
    reject_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reject_attempts' }})
    sampling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampling' }})
    submit_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submit_accepted' }})
    submit_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submit_attempts' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
