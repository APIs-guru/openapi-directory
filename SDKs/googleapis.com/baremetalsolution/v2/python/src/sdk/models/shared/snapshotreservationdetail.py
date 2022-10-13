from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SnapshotReservationDetail:
    reserved_space_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedSpaceGib' }})
    reserved_space_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedSpacePercent' }})
    reserved_space_remaining_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedSpaceRemainingGib' }})
    reserved_space_used_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedSpaceUsedPercent' }})
    
