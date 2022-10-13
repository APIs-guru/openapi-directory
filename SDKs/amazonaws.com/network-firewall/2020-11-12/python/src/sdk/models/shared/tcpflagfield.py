from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tcpflag_enum
from . import tcpflag_enum


@dataclass_json
@dataclass
class TCPFlagField:
    flags: List[tcpflag_enum.TCPFlagEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Flags' }})
    masks: Optional[List[tcpflag_enum.TCPFlagEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Masks' }})
    
