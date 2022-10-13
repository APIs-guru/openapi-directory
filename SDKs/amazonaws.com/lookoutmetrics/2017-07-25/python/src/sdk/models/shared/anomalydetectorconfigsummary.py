from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import frequency_enum


@dataclass_json
@dataclass
class AnomalyDetectorConfigSummary:
    anomaly_detector_frequency: Optional[frequency_enum.FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorFrequency' }})
    
