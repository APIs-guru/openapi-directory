from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Record:
    r"""Record
    Record represents a time series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the meta data attributes of a time series data point such as the instance name or availability zone of an EC2 instance. A record also contains the measure name which is the name of the measure being collected for example the CPU utilization of an EC2 instance. A record also contains the measure value and the value type which is the data type of the measure value. In addition, the record contains the timestamp when the measure was collected that the timestamp unit which represents the granularity of the timestamp. 
    """
    
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    measure_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeasureName') }})
    measure_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeasureValue') }})
    measure_value_type: Optional[MeasureValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeasureValueType') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Time') }})
    time_unit: Optional[TimeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
