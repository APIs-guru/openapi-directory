from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharestatus_enum
from . import firewallrulegroupstatus_enum


@dataclass_json
@dataclass
class FirewallRuleGroup:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    rule_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleCount' }})
    share_status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareStatus' }})
    status: Optional[firewallrulegroupstatus_enum.FirewallRuleGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    
