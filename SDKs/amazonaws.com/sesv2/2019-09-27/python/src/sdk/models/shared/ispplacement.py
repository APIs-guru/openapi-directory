from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import placementstatistics


@dataclass_json
@dataclass
class IspPlacement:
    isp_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IspName' }})
    placement_statistics: Optional[placementstatistics.PlacementStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementStatistics' }})
    
