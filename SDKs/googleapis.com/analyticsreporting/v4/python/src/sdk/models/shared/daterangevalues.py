from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DateRangeValues:
    r"""DateRangeValues
    Used to return a list of metrics for a single DateRange / dimension combination
    """
    
    pivot_value_regions: Optional[List[PivotValueRegion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotValueRegions') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
