from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monthlytransfer
from . import instanceportinfo


@dataclass_json
@dataclass
class InstanceNetworking:
    monthly_transfer: Optional[monthlytransfer.MonthlyTransfer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlyTransfer' }})
    ports: Optional[List[instanceportinfo.InstancePortInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    
