from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Network:
    r"""Network
    The details of network-related information about a finding.
    """
    
    destination_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationDomain') }})
    destination_ip_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationIpV4') }})
    destination_ip_v6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationIpV6') }})
    destination_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPort') }})
    direction: Optional[NetworkDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    open_port_range: Optional[PortRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenPortRange') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    source_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDomain') }})
    source_ip_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIpV4') }})
    source_ip_v6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIpV6') }})
    source_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceMac') }})
    source_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePort') }})
    
