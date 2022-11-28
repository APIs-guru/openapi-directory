from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShutdownEventConfiguration:
    r"""ShutdownEventConfiguration
    The Shutdown event configuration.
    """
    
    delay_until_elb_connections_drained: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DelayUntilElbConnectionsDrained') }})
    execution_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionTimeout') }})
    
