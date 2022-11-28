from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BlueGreenUpdatePolicy:
    r"""BlueGreenUpdatePolicy
    Currently, the <code>BlueGreenUpdatePolicy</code> API is not supported.
    """
    
    traffic_routing_configuration: TrafficRoutingConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrafficRoutingConfiguration') }})
    maximum_execution_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumExecutionTimeoutInSeconds') }})
    termination_wait_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationWaitInSeconds') }})
    
