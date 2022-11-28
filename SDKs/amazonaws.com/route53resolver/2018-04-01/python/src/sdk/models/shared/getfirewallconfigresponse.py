from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFirewallConfigResponse:
    firewall_config: Optional[FirewallConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallConfig') }})
    
