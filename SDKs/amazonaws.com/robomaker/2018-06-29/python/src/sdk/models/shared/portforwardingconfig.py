from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portmapping


@dataclass_json
@dataclass
class PortForwardingConfig:
    port_mappings: Optional[List[portmapping.PortMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portMappings' }})
    
