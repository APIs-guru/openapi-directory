from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceactiondetail


@dataclass_json
@dataclass
class UpdateServiceActionOutput:
    service_action_detail: Optional[serviceactiondetail.ServiceActionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceActionDetail' }})
    
