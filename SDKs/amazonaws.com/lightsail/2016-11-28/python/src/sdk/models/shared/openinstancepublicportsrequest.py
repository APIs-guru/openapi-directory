from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import portinfo


@dataclass_json
@dataclass
class OpenInstancePublicPortsRequest:
    instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    port_info: portinfo.PortInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portInfo' }})
    
