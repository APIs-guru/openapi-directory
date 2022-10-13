from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicesummary


@dataclass_json
@dataclass
class ListServicesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    services: List[servicesummary.ServiceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
