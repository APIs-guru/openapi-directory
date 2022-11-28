from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionLocalPortDetails:
    r"""ActionLocalPortDetails
    For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>, <code>LocalPortDetails</code> provides information about the local port that was involved in the action.
    """
    
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    port_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortName') }})
    
