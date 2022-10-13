from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import firewalldomainupdateoperation_enum


@dataclass_json
@dataclass
class UpdateFirewallDomainsRequest:
    domains: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domains' }})
    firewall_domain_list_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallDomainListId' }})
    operation: firewalldomainupdateoperation_enum.FirewallDomainUpdateOperationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operation' }})
    
