from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FlinkApplicationConfiguration:
    r"""FlinkApplicationConfiguration
    Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
    """
    
    checkpoint_configuration: Optional[CheckpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfiguration') }})
    monitoring_configuration: Optional[MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfiguration') }})
    parallelism_configuration: Optional[ParallelismConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismConfiguration') }})
    
