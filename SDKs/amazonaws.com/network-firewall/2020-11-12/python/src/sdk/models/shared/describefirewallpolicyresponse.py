from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFirewallPolicyResponse:
    firewall_policy_response: FirewallPolicyResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyResponse') }})
    update_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    firewall_policy: Optional[FirewallPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicy') }})
    
