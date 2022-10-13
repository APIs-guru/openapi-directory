from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvalueentry


@dataclass_json
@dataclass
class UserAuthMethod:
    auth_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authId' }})
    is_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    options: Optional[List[keyvalueentry.KeyValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    
