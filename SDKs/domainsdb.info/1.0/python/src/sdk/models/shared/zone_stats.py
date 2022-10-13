from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import zone_statistics


@dataclass_json
@dataclass
class ZoneStats:
    next_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    statistics: Optional[List[zone_statistics.ZoneStatistics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
