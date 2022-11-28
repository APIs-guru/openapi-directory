from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBaremetalsolutionV2LogicalInterface:
    r"""GoogleCloudBaremetalsolutionV2LogicalInterface
    Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
    """
    
    interface_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIndex') }})
    logical_network_interfaces: Optional[List[LogicalNetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalNetworkInterfaces') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
