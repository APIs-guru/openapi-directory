from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewalldomainlist


@dataclass_json
@dataclass
class CreateFirewallDomainListResponse:
    firewall_domain_list: Optional[firewalldomainlist.FirewallDomainList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallDomainList' }})
    
