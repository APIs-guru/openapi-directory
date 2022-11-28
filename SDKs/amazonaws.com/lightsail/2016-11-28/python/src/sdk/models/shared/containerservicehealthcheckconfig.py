from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContainerServiceHealthCheckConfig:
    r"""ContainerServiceHealthCheckConfig
    Describes the health check configuration of an Amazon Lightsail container service.
    """
    
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthyThreshold') }})
    interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalSeconds') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    success_codes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successCodes') }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthyThreshold') }})
    
