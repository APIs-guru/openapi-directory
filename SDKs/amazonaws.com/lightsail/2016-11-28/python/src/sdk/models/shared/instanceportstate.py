from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancePortState:
    r"""InstancePortState
    Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
    """
    
    cidr_list_aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrListAliases') }})
    cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrs') }})
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromPort') }})
    ipv6_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Cidrs') }})
    protocol: Optional[NetworkProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    state: Optional[PortStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toPort') }})
    
