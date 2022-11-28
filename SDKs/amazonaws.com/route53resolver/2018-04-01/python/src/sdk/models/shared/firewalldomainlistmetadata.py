from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirewallDomainListMetadata:
    r"""FirewallDomainListMetadata
    <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    managed_owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedOwnerName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
