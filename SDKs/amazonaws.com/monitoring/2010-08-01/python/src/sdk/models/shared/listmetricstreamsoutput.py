from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListMetricStreamsOutput:
    entries: Optional[List[MetricStreamEntry]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
