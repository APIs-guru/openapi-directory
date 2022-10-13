from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import traffic


@dataclass_json
@dataclass
class CloneTraffic:
    clones: List[traffic.Traffic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clones' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    uniques: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniques' }})
    
