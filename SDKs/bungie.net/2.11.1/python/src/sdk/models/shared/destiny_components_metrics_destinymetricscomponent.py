from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyComponentsMetricsDestinyMetricsComponent:
    metrics: Optional[dict[str, DestinyComponentsMetricsDestinyMetricComponent]] = field(default=None)
    metrics_root_node_hash: Optional[int] = field(default=None)
    
