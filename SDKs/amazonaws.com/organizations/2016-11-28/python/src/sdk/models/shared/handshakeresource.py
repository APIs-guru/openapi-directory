from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import handshakeresource
from . import handshakeresourcetype_enum


@dataclass_json
@dataclass
class HandshakeResource:
    resources: Optional[List[handshakeresource.HandshakeResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    type: Optional[handshakeresourcetype_enum.HandshakeResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
