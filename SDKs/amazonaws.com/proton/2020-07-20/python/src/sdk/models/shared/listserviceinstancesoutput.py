from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceinstancesummary


@dataclass_json
@dataclass
class ListServiceInstancesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    service_instances: List[serviceinstancesummary.ServiceInstanceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceInstances' }})
    
