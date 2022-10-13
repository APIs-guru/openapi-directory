from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portprobedetail


@dataclass_json
@dataclass
class PortProbeAction:
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Blocked' }})
    port_probe_details: Optional[List[portprobedetail.PortProbeDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortProbeDetails' }})
    
