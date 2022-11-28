from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HealthCheck:
    r"""HealthCheck
    Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
    """
    
    check_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkInterval') }})
    disable_health_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableHealthCheck') }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthyThreshold') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    restart_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restartThreshold') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthyThreshold') }})
    
