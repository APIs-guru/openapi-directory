from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateFirewallRuleRequest:
    firewall_domain_list_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainListId') }})
    firewall_rule_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupId') }})
    action: Optional[ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    block_override_dns_type: Optional[BlockOverrideDNSTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockOverrideDnsType') }})
    block_override_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockOverrideDomain') }})
    block_override_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockOverrideTtl') }})
    block_response: Optional[BlockResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockResponse') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    
