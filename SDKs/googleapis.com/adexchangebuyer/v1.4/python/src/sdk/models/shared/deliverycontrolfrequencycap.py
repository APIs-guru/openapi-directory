from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeliveryControlFrequencyCap:
    max_impressions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxImpressions' }})
    num_time_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numTimeUnits' }})
    time_unit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUnitType' }})
    
