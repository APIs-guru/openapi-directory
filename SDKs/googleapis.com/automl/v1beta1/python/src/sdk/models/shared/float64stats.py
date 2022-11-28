from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Float64Stats:
    r"""Float64Stats
    The data statistics of a series of FLOAT64 values.
    """
    
    histogram_buckets: Optional[List[HistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramBuckets') }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    quantiles: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantiles') }})
    standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDeviation') }})
    
