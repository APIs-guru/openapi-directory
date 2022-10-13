from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import arraystats
from . import categorystats
from . import float64stats
from . import stringstats
from . import structstats
from . import timestampstats


@dataclass_json
@dataclass
class DataStats:
    array_stats: Optional[arraystats.ArrayStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayStats' }})
    category_stats: Optional[categorystats.CategoryStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryStats' }})
    distinct_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distinctValueCount' }})
    float64_stats: Optional[float64stats.Float64Stats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'float64Stats' }})
    null_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullValueCount' }})
    string_stats: Optional[stringstats.StringStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringStats' }})
    struct_stats: Optional[structstats.StructStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structStats' }})
    timestamp_stats: Optional[timestampstats.TimestampStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampStats' }})
    valid_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validValueCount' }})
    
