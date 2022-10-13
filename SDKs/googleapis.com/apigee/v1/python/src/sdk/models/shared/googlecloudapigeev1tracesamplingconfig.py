from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum(str, Enum):
    SAMPLER_UNSPECIFIED = "SAMPLER_UNSPECIFIED"
    OFF = "OFF"
    PROBABILITY = "PROBABILITY"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TraceSamplingConfig:
    sampler: Optional[GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampler' }})
    sampling_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingRate' }})
    
