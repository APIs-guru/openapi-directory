from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancesummary


@dataclass_json
@dataclass
class ListInstancesResponse:
    instances: Optional[List[instancesummary.InstanceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instances' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
