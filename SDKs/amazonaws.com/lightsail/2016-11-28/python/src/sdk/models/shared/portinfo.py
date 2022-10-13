from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import networkprotocol_enum


@dataclass_json
@dataclass
class PortInfo:
    cidr_list_aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrListAliases' }})
    cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrs' }})
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromPort' }})
    ipv6_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6Cidrs' }})
    protocol: Optional[networkprotocol_enum.NetworkProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toPort' }})
    
