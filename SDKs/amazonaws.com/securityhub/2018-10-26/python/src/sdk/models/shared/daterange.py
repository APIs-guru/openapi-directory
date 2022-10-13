from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import daterangeunit_enum


@dataclass_json
@dataclass
class DateRange:
    unit: Optional[daterangeunit_enum.DateRangeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
