from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceupdate


@dataclass_json
@dataclass
class DescribeServiceUpdatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    service_updates: Optional[List[serviceupdate.ServiceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUpdates' }})
    
