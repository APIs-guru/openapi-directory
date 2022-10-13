from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import handshake


@dataclass_json
@dataclass
class InviteAccountToOrganizationResponse:
    handshake: Optional[handshake.Handshake] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handshake' }})
    
