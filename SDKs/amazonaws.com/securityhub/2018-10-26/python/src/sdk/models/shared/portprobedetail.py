from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PortProbeDetail:
    r"""PortProbeDetail
    A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from.
    """
    
    local_ip_details: Optional[ActionLocalIPDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalIpDetails') }})
    local_port_details: Optional[ActionLocalPortDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPortDetails') }})
    remote_ip_details: Optional[ActionRemoteIPDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteIpDetails') }})
    
