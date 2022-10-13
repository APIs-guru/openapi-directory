from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action_enum
from . import blockoverridednstype_enum
from . import blockresponse_enum


@dataclass_json
@dataclass
class FirewallRule:
    action: Optional[action_enum.ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    block_override_dns_type: Optional[blockoverridednstype_enum.BlockOverrideDNSTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockOverrideDnsType' }})
    block_override_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockOverrideDomain' }})
    block_override_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockOverrideTtl' }})
    block_response: Optional[blockresponse_enum.BlockResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockResponse' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    firewall_domain_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallDomainListId' }})
    firewall_rule_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupId' }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    
