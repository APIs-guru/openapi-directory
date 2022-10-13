from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventlogConfig:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    log_ip_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logIpEnabled' }})
    retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    
