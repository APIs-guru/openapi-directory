from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricKeyDataPoints:
    r"""MetricKeyDataPoints
    A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
    """
    
    data_points: Optional[List[DataPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataPoints') }})
    key: Optional[ResponseResourceMetricKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    
