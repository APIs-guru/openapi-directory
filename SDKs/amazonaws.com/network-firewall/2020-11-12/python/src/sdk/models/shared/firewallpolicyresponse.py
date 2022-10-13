from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcestatus_enum
from . import tag


@dataclass_json
@dataclass
class FirewallPolicyResponse:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    firewall_policy_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyArn' }})
    firewall_policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyId' }})
    firewall_policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyName' }})
    firewall_policy_status: Optional[resourcestatus_enum.ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyStatus' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
