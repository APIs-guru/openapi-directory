from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import firewallrulegroupassociationstatus_enum


@dataclass_json
@dataclass
class ListFirewallRuleGroupAssociationsRequest:
    firewall_rule_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    status: Optional[firewallrulegroupassociationstatus_enum.FirewallRuleGroupAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
