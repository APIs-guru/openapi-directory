from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class MetricStat:
    r"""MetricStat
    This structure defines the metric to be returned, along with the statistics, period, and units.
    """
    
    metric: Metric = field()
    period: int = field()
    stat: str = field()
    unit: Optional[StandardUnitEnum] = field(default=None)
    
