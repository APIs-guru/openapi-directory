from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchAttributes:
    r"""MatchAttributes
    Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. 
    """
    
    destination_ports: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPorts') }})
    destinations: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destinations') }})
    protocols: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    source_ports: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePorts') }})
    sources: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sources') }})
    tcp_flags: Optional[List[TCPFlagField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TCPFlags') }})
    
