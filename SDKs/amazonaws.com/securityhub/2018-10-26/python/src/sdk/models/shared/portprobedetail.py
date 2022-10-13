from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actionlocalipdetails
from . import actionlocalportdetails
from . import actionremoteipdetails


@dataclass_json
@dataclass
class PortProbeDetail:
    local_ip_details: Optional[actionlocalipdetails.ActionLocalIPDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalIpDetails' }})
    local_port_details: Optional[actionlocalportdetails.ActionLocalPortDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPortDetails' }})
    remote_ip_details: Optional[actionremoteipdetails.ActionRemoteIPDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteIpDetails' }})
    
