from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReturningProduction:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    passing_usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingUsage') }})
    percent_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentPPA') }})
    percent_passing_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentPassingPPA') }})
    percent_receiving_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentReceivingPPA') }})
    percent_rushing_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentRushingPPA') }})
    receiving_usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingUsage') }})
    rushing_usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingUsage') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    total_passing_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPassingPPA') }})
    total_receiving_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReceivingPPA') }})
    total_rushing_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRushingPPA') }})
    usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
