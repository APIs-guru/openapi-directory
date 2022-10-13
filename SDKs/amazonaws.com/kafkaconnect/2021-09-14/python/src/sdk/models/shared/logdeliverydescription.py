from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workerlogdeliverydescription


@dataclass_json
@dataclass
class LogDeliveryDescription:
    worker_log_delivery: Optional[workerlogdeliverydescription.WorkerLogDeliveryDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerLogDelivery' }})
    
