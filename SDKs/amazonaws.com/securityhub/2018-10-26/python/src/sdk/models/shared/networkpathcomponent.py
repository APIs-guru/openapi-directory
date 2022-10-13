from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkheader
from . import networkheader


@dataclass_json
@dataclass
class NetworkPathComponent:
    component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentId' }})
    component_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentType' }})
    egress: Optional[networkheader.NetworkHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Egress' }})
    ingress: Optional[networkheader.NetworkHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ingress' }})
    
