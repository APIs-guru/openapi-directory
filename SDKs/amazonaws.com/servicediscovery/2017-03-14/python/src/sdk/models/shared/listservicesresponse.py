from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicesummary


@dataclass_json
@dataclass
class ListServicesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    services: Optional[List[servicesummary.ServiceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Services' }})
    
