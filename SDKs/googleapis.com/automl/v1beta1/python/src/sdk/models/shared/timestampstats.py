from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import granularstats


@dataclass_json
@dataclass
class TimestampStats:
    granular_stats: Optional[dict[str, granularstats.GranularStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'granularStats' }})
    
