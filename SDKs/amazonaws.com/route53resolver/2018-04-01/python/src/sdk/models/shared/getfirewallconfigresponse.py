from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firewallconfig


@dataclass_json
@dataclass
class GetFirewallConfigResponse:
    firewall_config: Optional[firewallconfig.FirewallConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallConfig' }})
    
