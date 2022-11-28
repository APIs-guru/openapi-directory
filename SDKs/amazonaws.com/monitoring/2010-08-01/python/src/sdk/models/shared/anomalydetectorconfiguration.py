from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AnomalyDetectorConfiguration:
    r"""AnomalyDetectorConfiguration
    The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.
    """
    
    excluded_time_ranges: Optional[List[Range]] = field(default=None)
    metric_timezone: Optional[str] = field(default=None)
    
