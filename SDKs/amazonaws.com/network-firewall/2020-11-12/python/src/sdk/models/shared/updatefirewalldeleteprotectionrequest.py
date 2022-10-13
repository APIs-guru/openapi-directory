from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateFirewallDeleteProtectionRequest:
    delete_protection: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteProtection' }})
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallArn' }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallName' }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
