from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricHeader:
    r"""MetricHeader
    The headers for the metrics.
    """
    
    metric_header_entries: Optional[List[MetricHeaderEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricHeaderEntries') }})
    pivot_headers: Optional[List[PivotHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotHeaders') }})
    
