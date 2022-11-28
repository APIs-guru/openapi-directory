from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringScheduleConfig:
    r"""MonitoringScheduleConfig
    Configures the monitoring schedule and defines the monitoring job.
    """
    
    monitoring_job_definition: Optional[MonitoringJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringJobDefinition') }})
    monitoring_job_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringJobDefinitionName') }})
    monitoring_type: Optional[MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringType') }})
    schedule_config: Optional[ScheduleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleConfig') }})
    
