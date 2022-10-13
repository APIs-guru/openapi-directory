from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DailyStatsNestedJSON:
    interquartile_range: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interquartile_range' }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mean' }})
    median: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'median' }})
    population_standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'population_standard_deviation' }})
    standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standard_deviation' }})
    trimmed_mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trimmed_mean' }})
    variance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variance' }})
    
