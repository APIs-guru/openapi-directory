from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import invitation


@dataclass_json
@dataclass
class GetAdministratorAccountResponse:
    administrator: Optional[invitation.Invitation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Administrator' }})
    
