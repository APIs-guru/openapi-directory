from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ipset
from . import portset


@dataclass_json
@dataclass
class RuleVariables:
    ip_sets: Optional[dict[str, ipset.IPSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSets' }})
    port_sets: Optional[dict[str, portset.PortSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortSets' }})
    
