from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum(str, Enum):
    SAMPLER_UNSPECIFIED = "SAMPLER_UNSPECIFIED"
    OFF = "OFF"
    PROBABILITY = "PROBABILITY"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TraceSamplingConfig:
    r"""GoogleCloudApigeeV1TraceSamplingConfig
    TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.
    """
    
    sampler: Optional[GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampler') }})
    sampling_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingRate') }})
    
