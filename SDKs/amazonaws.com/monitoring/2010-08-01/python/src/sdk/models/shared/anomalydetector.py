from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class AnomalyDetector:
    r"""AnomalyDetector
    An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed.
    """
    
    configuration: Optional[AnomalyDetectorConfiguration] = field(default=None)
    dimensions: Optional[List[Dimension]] = field(default=None)
    metric_name: Optional[str] = field(default=None)
    namespace: Optional[str] = field(default=None)
    stat: Optional[str] = field(default=None)
    state_value: Optional[AnomalyDetectorStateValueEnum] = field(default=None)
    
