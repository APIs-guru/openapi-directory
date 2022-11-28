from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParallelismConfiguration:
    r"""ParallelismConfiguration
    Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href=\"https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html\">Parallel Execution</a> in the <a href=\"https://ci.apache.org/projects/flink/flink-docs-release-1.8/\">Apache Flink Documentation</a>.
    """
    
    configuration_type: ConfigurationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    auto_scaling_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingEnabled') }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parallelism') }})
    parallelism_per_kpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismPerKPU') }})
    
