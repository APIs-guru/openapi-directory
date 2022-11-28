from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsWafWebACLDetails:
    r"""AwsWafWebACLDetails
    Details about an WAF WebACL.
    """
    
    default_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAction') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rules: Optional[List[AwsWafWebACLRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    web_acl_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebAclId') }})
    
