from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import handshake


@dataclass_json
@dataclass
class ListHandshakesForOrganizationResponse:
    handshakes: Optional[List[handshake.Handshake]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handshakes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
