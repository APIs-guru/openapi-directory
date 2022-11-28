from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DestinationRoute:
    r"""DestinationRoute
    The setting used to configure ClientGateways. It is adding routes to the client's routing table after the connection is established.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    
