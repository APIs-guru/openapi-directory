from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisassociateResourceSharePermissionResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    return_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnValue' }})
    
