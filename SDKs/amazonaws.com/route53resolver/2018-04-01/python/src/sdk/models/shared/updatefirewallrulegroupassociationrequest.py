from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mutationprotectionstatus_enum


@dataclass_json
@dataclass
class UpdateFirewallRuleGroupAssociationRequest:
    firewall_rule_group_association_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupAssociationId' }})
    mutation_protection: Optional[mutationprotectionstatus_enum.MutationProtectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MutationProtection' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    
