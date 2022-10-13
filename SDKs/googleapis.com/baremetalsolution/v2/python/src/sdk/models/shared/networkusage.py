from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import network


@dataclass_json
@dataclass
class NetworkUsage:
    network: Optional[network.Network] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    used_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedIps' }})
    
