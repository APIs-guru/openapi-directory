from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScaleOutPolicyUpdate:
    cpu_utilization_percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuUtilizationPercentage' }})
    
