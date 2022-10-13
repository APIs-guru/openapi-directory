from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firewall
from . import firewallstatus


@dataclass_json
@dataclass
class DescribeFirewallResponse:
    firewall: Optional[firewall.Firewall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Firewall' }})
    firewall_status: Optional[firewallstatus.FirewallStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallStatus' }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
