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
class DescribeFirewallResponse:
    firewall: Optional[Firewall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Firewall') }})
    firewall_status: Optional[FirewallStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallStatus') }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    
