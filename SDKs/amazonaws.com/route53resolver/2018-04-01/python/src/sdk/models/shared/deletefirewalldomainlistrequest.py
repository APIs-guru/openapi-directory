from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteFirewallDomainListRequest:
    firewall_domain_list_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallDomainListId' }})
    
