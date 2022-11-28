from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetMetricStatisticsOutput:
    datapoints: Optional[List[Datapoint]] = field(default=None)
    label: Optional[str] = field(default=None)
    
