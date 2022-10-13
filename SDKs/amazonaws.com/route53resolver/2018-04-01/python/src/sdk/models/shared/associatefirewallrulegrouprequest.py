from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mutationprotectionstatus_enum
from . import tag


@dataclass_json
@dataclass
class AssociateFirewallRuleGroupRequest:
    creator_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    firewall_rule_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupId' }})
    mutation_protection: Optional[mutationprotectionstatus_enum.MutationProtectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MutationProtection' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
