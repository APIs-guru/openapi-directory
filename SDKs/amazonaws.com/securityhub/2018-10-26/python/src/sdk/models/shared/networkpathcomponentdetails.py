from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkPathComponentDetails:
    r"""NetworkPathComponentDetails
    Information about the destination of the next component in the network path.
    """
    
    address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    port_ranges: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    
