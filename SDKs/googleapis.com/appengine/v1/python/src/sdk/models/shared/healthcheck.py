from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HealthCheck:
    check_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkInterval' }})
    disable_health_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableHealthCheck' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthyThreshold' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    restart_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restartThreshold' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthyThreshold' }})
    
