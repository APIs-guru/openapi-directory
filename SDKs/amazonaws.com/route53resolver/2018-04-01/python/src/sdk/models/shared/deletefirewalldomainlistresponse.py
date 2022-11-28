from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteFirewallDomainListResponse:
    firewall_domain_list: Optional[FirewallDomainList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainList') }})
    
