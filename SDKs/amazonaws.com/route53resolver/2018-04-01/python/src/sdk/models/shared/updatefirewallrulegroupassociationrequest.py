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
class UpdateFirewallRuleGroupAssociationRequest:
    firewall_rule_group_association_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupAssociationId') }})
    mutation_protection: Optional[MutationProtectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MutationProtection') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    
