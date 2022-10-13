from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcesummary


@dataclass_json
@dataclass
class ListDeviceResourcesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resources: Optional[List[resourcesummary.ResourceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
