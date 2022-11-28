from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetMetricDataOutput:
    messages: Optional[List[MessageData]] = field(default=None)
    metric_data_results: Optional[List[MetricDataResult]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
