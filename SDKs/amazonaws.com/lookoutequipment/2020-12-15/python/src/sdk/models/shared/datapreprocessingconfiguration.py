from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataPreProcessingConfiguration:
    r"""DataPreProcessingConfiguration
    <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix \"PT\" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p>
    """
    
    target_sampling_rate: Optional[TargetSamplingRateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetSamplingRate') }})
    
