from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mutationprotectionstatus_enum
from . import firewallrulegroupassociationstatus_enum


@dataclass_json
@dataclass
class FirewallRuleGroupAssociation:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    firewall_rule_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    managed_owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedOwnerName' }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationTime' }})
    mutation_protection: Optional[mutationprotectionstatus_enum.MutationProtectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MutationProtection' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    status: Optional[firewallrulegroupassociationstatus_enum.FirewallRuleGroupAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
