from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyComponentsMetricsDestinyMetricComponent:
    invisible: Optional[bool] = field(default=None)
    objective_progress: Optional[DestinyQuestsDestinyObjectiveProgress] = field(default=None)
    
