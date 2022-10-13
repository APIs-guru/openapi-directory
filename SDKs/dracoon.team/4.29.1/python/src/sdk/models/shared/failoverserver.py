from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FailoverServer:
    failover_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failoverEnabled' }})
    failover_ip_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failoverIpAddress' }})
    failover_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failoverPort' }})
    
