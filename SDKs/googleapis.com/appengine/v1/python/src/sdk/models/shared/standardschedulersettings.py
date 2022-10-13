from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StandardSchedulerSettings:
    max_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxInstances' }})
    min_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minInstances' }})
    target_cpu_utilization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCpuUtilization' }})
    target_throughput_utilization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetThroughputUtilization' }})
    
