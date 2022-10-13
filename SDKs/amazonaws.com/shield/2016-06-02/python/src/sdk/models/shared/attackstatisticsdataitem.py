from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attackvolume


@dataclass_json
@dataclass
class AttackStatisticsDataItem:
    attack_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackCount' }})
    attack_volume: Optional[attackvolume.AttackVolume] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackVolume' }})
    
