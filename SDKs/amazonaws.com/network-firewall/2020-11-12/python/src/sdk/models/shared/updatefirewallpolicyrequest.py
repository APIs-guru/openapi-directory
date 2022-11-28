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
class UpdateFirewallPolicyRequest:
    firewall_policy: FirewallPolicy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicy') }})
    update_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    firewall_policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyArn') }})
    firewall_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyName') }})
    
