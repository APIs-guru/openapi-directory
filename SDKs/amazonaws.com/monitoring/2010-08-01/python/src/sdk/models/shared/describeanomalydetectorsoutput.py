from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAnomalyDetectorsOutput:
    anomaly_detectors: Optional[List[AnomalyDetector]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
