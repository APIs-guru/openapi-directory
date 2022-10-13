from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewallconfig


@dataclass_json
@dataclass
class ListFirewallConfigsResponse:
    firewall_configs: Optional[List[firewallconfig.FirewallConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallConfigs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
