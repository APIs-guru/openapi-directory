from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringBaselineConfig:
    r"""MonitoringBaselineConfig
    Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
    """
    
    baselining_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseliningJobName') }})
    constraints_resource: Optional[MonitoringConstraintsResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintsResource') }})
    statistics_resource: Optional[MonitoringStatisticsResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatisticsResource') }})
    
