from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddOn:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_snapshot_time_of_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextSnapshotTimeOfDay' }})
    snapshot_time_of_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotTimeOfDay' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
