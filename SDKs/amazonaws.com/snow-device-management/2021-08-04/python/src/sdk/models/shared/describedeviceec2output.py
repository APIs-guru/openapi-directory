from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancesummary


@dataclass_json
@dataclass
class DescribeDeviceEc2Output:
    instances: Optional[List[instancesummary.InstanceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    
