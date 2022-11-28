from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Record:
    r"""Record
    Type that defines the fields of the individual record of the report.
    """
    
    dimension_values: Optional[List[Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric_values: Optional[List[Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
