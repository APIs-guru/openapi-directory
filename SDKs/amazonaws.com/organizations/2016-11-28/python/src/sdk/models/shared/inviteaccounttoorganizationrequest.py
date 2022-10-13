from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import handshakeparty


@dataclass_json
@dataclass
class InviteAccountToOrganizationRequest:
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target: handshakeparty.HandshakeParty = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
