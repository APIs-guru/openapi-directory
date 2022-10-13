from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewalldomainlistmetadata


@dataclass_json
@dataclass
class ListFirewallDomainListsResponse:
    firewall_domain_lists: Optional[List[firewalldomainlistmetadata.FirewallDomainListMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallDomainLists' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
