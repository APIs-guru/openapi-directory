from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnomalyDetectorConfigSummary:
    r"""AnomalyDetectorConfigSummary
    Contains information about a detector's configuration.
    """
    
    anomaly_detector_frequency: Optional[FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorFrequency') }})
    
