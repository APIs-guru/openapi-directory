from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actiontype_enum


@dataclass_json
@dataclass
class HandshakeFilter:
    action_type: Optional[actiontype_enum.ActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    parent_handshake_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentHandshakeId' }})
    
