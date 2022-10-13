from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ipset


@dataclass_json
@dataclass
class CreateIPSetResponse:
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    ip_set: Optional[ipset.IPSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSet' }})
    
