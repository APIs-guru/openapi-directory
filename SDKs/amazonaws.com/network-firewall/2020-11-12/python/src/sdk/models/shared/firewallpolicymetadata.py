from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirewallPolicyMetadata:
    r"""FirewallPolicyMetadata
    High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
