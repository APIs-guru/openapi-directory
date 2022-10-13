from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import channelprotocol_enum


@dataclass_json
@dataclass
class ResourceEndpointListItem:
    protocol: Optional[channelprotocol_enum.ChannelProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    resource_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceEndpoint' }})
    
