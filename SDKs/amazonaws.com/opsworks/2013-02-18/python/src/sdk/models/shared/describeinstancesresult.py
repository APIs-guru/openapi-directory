from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instance


@dataclass_json
@dataclass
class DescribeInstancesResult:
    instances: Optional[List[instance.Instance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instances' }})
    
