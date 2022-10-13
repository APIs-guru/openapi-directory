from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import measurevaluetype_enum
from . import timeunit_enum


@dataclass_json
@dataclass
class Record:
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    measure_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeasureName' }})
    measure_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeasureValue' }})
    measure_value_type: Optional[measurevaluetype_enum.MeasureValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeasureValueType' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Time' }})
    time_unit: Optional[timeunit_enum.TimeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeUnit' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
