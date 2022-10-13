from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceinfo


@dataclass_json
@dataclass
class ListServicesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    services: Optional[List[serviceinfo.ServiceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Services' }})
    
