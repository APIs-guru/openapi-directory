from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeliveryControlFrequencyCap:
    max_impressions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImpressions') }})
    num_time_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numTimeUnits') }})
    time_unit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitType') }})
    
