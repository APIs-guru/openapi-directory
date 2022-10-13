from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import portinfo


@dataclass_json
@dataclass
class PutInstancePublicPortsRequest:
    instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    port_infos: List[portinfo.PortInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portInfos' }})
    
