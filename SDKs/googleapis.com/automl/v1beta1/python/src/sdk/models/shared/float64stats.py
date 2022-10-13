from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import histogrambucket


@dataclass_json
@dataclass
class Float64Stats:
    histogram_buckets: Optional[List[histogrambucket.HistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogramBuckets' }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mean' }})
    quantiles: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantiles' }})
    standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardDeviation' }})
    
