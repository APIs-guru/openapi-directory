from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import networkdirection_enum
from . import portrange


@dataclass_json
@dataclass
class Network:
    destination_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationDomain' }})
    destination_ip_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationIpV4' }})
    destination_ip_v6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationIpV6' }})
    destination_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPort' }})
    direction: Optional[networkdirection_enum.NetworkDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Direction' }})
    open_port_range: Optional[portrange.PortRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenPortRange' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    source_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceDomain' }})
    source_ip_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIpV4' }})
    source_ip_v6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIpV6' }})
    source_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceMac' }})
    source_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourcePort' }})
    
