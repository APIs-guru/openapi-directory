from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attackvolumestatistics
from . import attackvolumestatistics
from . import attackvolumestatistics


@dataclass_json
@dataclass
class AttackVolume:
    bits_per_second: Optional[attackvolumestatistics.AttackVolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitsPerSecond' }})
    packets_per_second: Optional[attackvolumestatistics.AttackVolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PacketsPerSecond' }})
    requests_per_second: Optional[attackvolumestatistics.AttackVolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestsPerSecond' }})
    
