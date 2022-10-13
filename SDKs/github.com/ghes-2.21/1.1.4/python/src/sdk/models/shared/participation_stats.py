from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParticipationStats:
    all: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    owner: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    
