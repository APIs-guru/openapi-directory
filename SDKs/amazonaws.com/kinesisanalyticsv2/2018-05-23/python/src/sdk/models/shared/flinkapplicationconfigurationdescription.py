from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FlinkApplicationConfigurationDescription:
    r"""FlinkApplicationConfigurationDescription
    Describes configuration parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    checkpoint_configuration_description: Optional[CheckpointConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfigurationDescription') }})
    job_plan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobPlanDescription') }})
    monitoring_configuration_description: Optional[MonitoringConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationDescription') }})
    parallelism_configuration_description: Optional[ParallelismConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismConfigurationDescription') }})
    
