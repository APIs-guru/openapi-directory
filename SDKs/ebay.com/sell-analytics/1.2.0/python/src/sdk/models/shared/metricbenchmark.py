from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricBenchmark:
    r"""MetricBenchmark
    This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
    """
    
    adjustment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    basis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basis') }})
    metadata: Optional[BenchmarkMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    
