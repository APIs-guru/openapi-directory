from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DailyStatsNestedJSON:
    r"""DailyStatsNestedJSON
    All nested JSON of stats
    """
    
    interquartile_range: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interquartile_range') }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    median: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('median') }})
    population_standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('population_standard_deviation') }})
    standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standard_deviation') }})
    trimmed_mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trimmed_mean') }})
    variance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variance') }})
    
