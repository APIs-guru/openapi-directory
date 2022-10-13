from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dnsconfigchange
from . import healthcheckconfig


@dataclass_json
@dataclass
class ServiceChange:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    dns_config: Optional[dnsconfigchange.DNSConfigChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsConfig' }})
    health_check_config: Optional[healthcheckconfig.HealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckConfig' }})
    
