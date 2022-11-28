from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDedicatedIpsResponse:
    r"""GetDedicatedIpsResponse
    Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.
    """
    
    dedicated_ips: Optional[List[DedicatedIP]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedIps') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
