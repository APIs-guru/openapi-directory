from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachStaticIPRequest:
    instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    static_ip_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticIpName' }})
    
