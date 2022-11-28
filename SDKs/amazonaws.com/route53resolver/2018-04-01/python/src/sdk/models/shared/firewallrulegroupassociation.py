from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FirewallRuleGroupAssociation:
    r"""FirewallRuleGroupAssociation
    An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    firewall_rule_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    managed_owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedOwnerName') }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModificationTime') }})
    mutation_protection: Optional[MutationProtectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MutationProtection') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    status: Optional[FirewallRuleGroupAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
