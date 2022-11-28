from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PortProbeAction:
    r"""PortProbeAction
    Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected.
    """
    
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocked') }})
    port_probe_details: Optional[List[PortProbeDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortProbeDetails') }})
    
