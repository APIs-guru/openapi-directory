from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShutdownEventConfiguration:
    delay_until_elb_connections_drained: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DelayUntilElbConnectionsDrained' }})
    execution_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionTimeout' }})
    
