from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DailyStats:
    dom: Optional[DailyStatsNestedJSON] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom') }})
    miles_stats: Optional[DailyStatsNestedJSON] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles_stats') }})
    price_stats: Optional[DailyStatsNestedJSON] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_stats') }})
    units_for_sale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units_for_sale') }})
    
