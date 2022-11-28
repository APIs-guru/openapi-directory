from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Metric:
    r"""Metric
    Represents a specific metric.
    """
    
    dimensions: Optional[List[Dimension]] = field(default=None)
    metric_name: Optional[str] = field(default=None)
    namespace: Optional[str] = field(default=None)
    
