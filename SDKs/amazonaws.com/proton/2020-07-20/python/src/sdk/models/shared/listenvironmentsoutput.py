from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environmentsummary


@dataclass_json
@dataclass
class ListEnvironmentsOutput:
    environments: List[environmentsummary.EnvironmentSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
