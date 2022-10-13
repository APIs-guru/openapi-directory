from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import checkpointconfigurationdescription
from . import monitoringconfigurationdescription
from . import parallelismconfigurationdescription


@dataclass_json
@dataclass
class FlinkApplicationConfigurationDescription:
    checkpoint_configuration_description: Optional[checkpointconfigurationdescription.CheckpointConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointConfigurationDescription' }})
    job_plan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobPlanDescription' }})
    monitoring_configuration_description: Optional[monitoringconfigurationdescription.MonitoringConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringConfigurationDescription' }})
    parallelism_configuration_description: Optional[parallelismconfigurationdescription.ParallelismConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelismConfigurationDescription' }})
    
