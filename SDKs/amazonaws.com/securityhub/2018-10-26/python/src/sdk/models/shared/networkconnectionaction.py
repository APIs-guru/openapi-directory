from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actionlocalportdetails
from . import actionremoteipdetails
from . import actionremoteportdetails


@dataclass_json
@dataclass
class NetworkConnectionAction:
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Blocked' }})
    connection_direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionDirection' }})
    local_port_details: Optional[actionlocalportdetails.ActionLocalPortDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPortDetails' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    remote_ip_details: Optional[actionremoteipdetails.ActionRemoteIPDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteIpDetails' }})
    remote_port_details: Optional[actionremoteportdetails.ActionRemotePortDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemotePortDetails' }})
    
