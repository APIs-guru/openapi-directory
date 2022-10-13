from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dailystatsnestedjson
from . import dailystatsnestedjson
from . import dailystatsnestedjson


@dataclass_json
@dataclass
class DailyStats:
    dom: Optional[dailystatsnestedjson.DailyStatsNestedJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dom' }})
    miles_stats: Optional[dailystatsnestedjson.DailyStatsNestedJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles_stats' }})
    price_stats: Optional[dailystatsnestedjson.DailyStatsNestedJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_stats' }})
    units_for_sale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units_for_sale' }})
    
