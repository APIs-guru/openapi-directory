from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceid


@dataclass_json
@dataclass
class TraceUser:
    service_ids: Optional[List[serviceid.ServiceID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceIds' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
