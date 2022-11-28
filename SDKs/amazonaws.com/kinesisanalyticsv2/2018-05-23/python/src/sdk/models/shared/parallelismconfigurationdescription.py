from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParallelismConfigurationDescription:
    r"""ParallelismConfigurationDescription
    Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
    """
    
    auto_scaling_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingEnabled') }})
    configuration_type: Optional[ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    current_parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentParallelism') }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parallelism') }})
    parallelism_per_kpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismPerKPU') }})
    
