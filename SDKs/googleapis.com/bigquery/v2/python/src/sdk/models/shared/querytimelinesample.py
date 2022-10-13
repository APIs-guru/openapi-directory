from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryTimelineSample:
    active_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeUnits' }})
    completed_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedUnits' }})
    elapsed_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elapsedMs' }})
    estimated_runnable_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedRunnableUnits' }})
    pending_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingUnits' }})
    total_slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSlotMs' }})
    
