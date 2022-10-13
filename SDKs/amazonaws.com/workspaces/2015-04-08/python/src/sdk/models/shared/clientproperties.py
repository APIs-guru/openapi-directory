from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reconnectenum_enum


@dataclass_json
@dataclass
class ClientProperties:
    reconnect_enabled: Optional[reconnectenum_enum.ReconnectEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReconnectEnabled' }})
    
