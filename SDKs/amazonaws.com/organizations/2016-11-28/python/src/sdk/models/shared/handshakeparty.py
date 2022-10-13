from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import handshakepartytype_enum


@dataclass_json
@dataclass
class HandshakeParty:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    type: handshakepartytype_enum.HandshakePartyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
