from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targetsamplingrate_enum


@dataclass_json
@dataclass
class DataPreProcessingConfiguration:
    target_sampling_rate: Optional[targetsamplingrate_enum.TargetSamplingRateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetSamplingRate' }})
    
