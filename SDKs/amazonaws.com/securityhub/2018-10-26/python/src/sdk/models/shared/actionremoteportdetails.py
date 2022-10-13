from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionRemotePortDetails:
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    port_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortName' }})
    
