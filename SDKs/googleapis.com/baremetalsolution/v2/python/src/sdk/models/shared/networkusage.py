from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkUsage:
    r"""NetworkUsage
    Network with all used IP addresses.
    """
    
    network: Optional[Network] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    used_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedIps') }})
    
