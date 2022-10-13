from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portrange
from . import address
from . import portrange
from . import address
from . import tcpflagfield


@dataclass_json
@dataclass
class MatchAttributes:
    destination_ports: Optional[List[portrange.PortRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPorts' }})
    destinations: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destinations' }})
    protocols: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    source_ports: Optional[List[portrange.PortRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourcePorts' }})
    sources: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sources' }})
    tcp_flags: Optional[List[tcpflagfield.TCPFlagField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TCPFlags' }})
    
