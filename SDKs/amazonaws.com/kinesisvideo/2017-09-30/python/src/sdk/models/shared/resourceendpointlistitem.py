from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceEndpointListItem:
    r"""ResourceEndpointListItem
    An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
    """
    
    protocol: Optional[ChannelProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    resource_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceEndpoint') }})
    
