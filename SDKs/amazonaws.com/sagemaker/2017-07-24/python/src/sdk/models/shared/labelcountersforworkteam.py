from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LabelCountersForWorkteam:
    human_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLabeled' }})
    pending_human: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingHuman' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    
