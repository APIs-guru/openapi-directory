from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import destinationroute

class ConfigTransportProtocolEnum(str, Enum):
    TRANSPORT_PROTOCOL_UNSPECIFIED = "TRANSPORT_PROTOCOL_UNSPECIFIED"
    TCP = "TCP"


@dataclass_json
@dataclass
class Config:
    destination_routes: Optional[List[destinationroute.DestinationRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationRoutes' }})
    transport_protocol: Optional[ConfigTransportProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transportProtocol' }})
    
