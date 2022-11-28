from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LivenessCheck:
    r"""LivenessCheck
    Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
    """
    
    check_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkInterval') }})
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureThreshold') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    initial_delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialDelay') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    success_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successThreshold') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
