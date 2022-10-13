from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import checkpointconfiguration
from . import monitoringconfiguration
from . import parallelismconfiguration


@dataclass_json
@dataclass
class FlinkApplicationConfiguration:
    checkpoint_configuration: Optional[checkpointconfiguration.CheckpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointConfiguration' }})
    monitoring_configuration: Optional[monitoringconfiguration.MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringConfiguration' }})
    parallelism_configuration: Optional[parallelismconfiguration.ParallelismConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelismConfiguration' }})
    
