from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConfigTransportProtocolEnum(str, Enum):
    TRANSPORT_PROTOCOL_UNSPECIFIED = "TRANSPORT_PROTOCOL_UNSPECIFIED"
    TCP = "TCP"


@dataclass_json
@dataclass
class Config:
    r"""Config
    The basic ingress config for ClientGateways.
    """
    
    destination_routes: Optional[List[DestinationRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationRoutes') }})
    transport_protocol: Optional[ConfigTransportProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportProtocol') }})
    
