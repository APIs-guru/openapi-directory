from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import periodunit_enum


@dataclass_json
@dataclass
class QuotaPeriod:
    period_unit: Optional[periodunit_enum.PeriodUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodUnit' }})
    period_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodValue' }})
    
