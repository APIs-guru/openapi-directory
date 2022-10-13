from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import monitoringjobdefinition
from . import monitoringtype_enum
from . import scheduleconfig


@dataclass_json
@dataclass
class MonitoringScheduleConfig:
    monitoring_job_definition: Optional[monitoringjobdefinition.MonitoringJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringJobDefinition' }})
    monitoring_job_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringJobDefinitionName' }})
    monitoring_type: Optional[monitoringtype_enum.MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringType' }})
    schedule_config: Optional[scheduleconfig.ScheduleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleConfig' }})
    
