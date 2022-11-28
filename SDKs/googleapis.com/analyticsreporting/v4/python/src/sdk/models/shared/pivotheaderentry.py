from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotHeaderEntry:
    r"""PivotHeaderEntry
    The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
    """
    
    dimension_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionNames') }})
    dimension_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric: Optional[MetricHeaderEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    
