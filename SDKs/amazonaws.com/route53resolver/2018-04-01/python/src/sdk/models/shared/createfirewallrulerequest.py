from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action_enum
from . import blockoverridednstype_enum
from . import blockresponse_enum


@dataclass_json
@dataclass
class CreateFirewallRuleRequest:
    action: action_enum.ActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    block_override_dns_type: Optional[blockoverridednstype_enum.BlockOverrideDNSTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockOverrideDnsType' }})
    block_override_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockOverrideDomain' }})
    block_override_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockOverrideTtl' }})
    block_response: Optional[blockresponse_enum.BlockResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockResponse' }})
    creator_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    firewall_domain_list_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallDomainListId' }})
    firewall_rule_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    
