from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirewallMetadata:
    r"""FirewallMetadata
    High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.
    """
    
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallArn') }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallName') }})
    
