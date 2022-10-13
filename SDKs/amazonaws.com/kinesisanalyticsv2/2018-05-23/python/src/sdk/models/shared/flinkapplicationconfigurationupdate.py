from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import checkpointconfigurationupdate
from . import monitoringconfigurationupdate
from . import parallelismconfigurationupdate


@dataclass_json
@dataclass
class FlinkApplicationConfigurationUpdate:
    checkpoint_configuration_update: Optional[checkpointconfigurationupdate.CheckpointConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointConfigurationUpdate' }})
    monitoring_configuration_update: Optional[monitoringconfigurationupdate.MonitoringConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringConfigurationUpdate' }})
    parallelism_configuration_update: Optional[parallelismconfigurationupdate.ParallelismConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelismConfigurationUpdate' }})
    
