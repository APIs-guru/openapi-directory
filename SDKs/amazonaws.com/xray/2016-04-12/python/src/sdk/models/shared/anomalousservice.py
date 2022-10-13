from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceid


@dataclass_json
@dataclass
class AnomalousService:
    service_id: Optional[serviceid.ServiceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceId' }})
    
