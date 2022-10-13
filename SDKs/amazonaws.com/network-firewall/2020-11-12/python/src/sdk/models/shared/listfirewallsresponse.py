from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewallmetadata


@dataclass_json
@dataclass
class ListFirewallsResponse:
    firewalls: Optional[List[firewallmetadata.FirewallMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Firewalls' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
