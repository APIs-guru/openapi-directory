from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import firewalldomainimportoperation_enum


@dataclass_json
@dataclass
class ImportFirewallDomainsRequest:
    domain_file_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainFileUrl' }})
    firewall_domain_list_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallDomainListId' }})
    operation: firewalldomainimportoperation_enum.FirewallDomainImportOperationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operation' }})
    
