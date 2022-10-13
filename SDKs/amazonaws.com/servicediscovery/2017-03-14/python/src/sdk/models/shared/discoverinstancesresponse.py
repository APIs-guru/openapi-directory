from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpinstancesummary


@dataclass_json
@dataclass
class DiscoverInstancesResponse:
    instances: Optional[List[httpinstancesummary.HTTPInstanceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instances' }})
    
