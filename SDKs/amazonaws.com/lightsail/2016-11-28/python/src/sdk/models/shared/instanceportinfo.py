from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accessdirection_enum
from . import portaccesstype_enum
from . import networkprotocol_enum


@dataclass_json
@dataclass
class InstancePortInfo:
    access_direction: Optional[accessdirection_enum.AccessDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessDirection' }})
    access_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessFrom' }})
    access_type: Optional[portaccesstype_enum.PortAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessType' }})
    cidr_list_aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrListAliases' }})
    cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrs' }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonName' }})
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromPort' }})
    ipv6_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6Cidrs' }})
    protocol: Optional[networkprotocol_enum.NetworkProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toPort' }})
    
