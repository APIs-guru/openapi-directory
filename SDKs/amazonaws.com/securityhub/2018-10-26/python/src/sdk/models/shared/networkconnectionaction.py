from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkConnectionAction:
    r"""NetworkConnectionAction
    Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
    """
    
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocked') }})
    connection_direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionDirection') }})
    local_port_details: Optional[ActionLocalPortDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPortDetails') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    remote_ip_details: Optional[ActionRemoteIPDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteIpDetails') }})
    remote_port_details: Optional[ActionRemotePortDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemotePortDetails') }})
    
