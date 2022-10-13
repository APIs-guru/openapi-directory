from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisionedCapacityUpdate:
    mcu_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcuCount' }})
    worker_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerCount' }})
    
