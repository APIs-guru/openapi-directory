from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDedicatedIPResponse:
    r"""GetDedicatedIPResponse
    Information about a dedicated IP address.
    """
    
    dedicated_ip: Optional[DedicatedIP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedIp') }})
    
