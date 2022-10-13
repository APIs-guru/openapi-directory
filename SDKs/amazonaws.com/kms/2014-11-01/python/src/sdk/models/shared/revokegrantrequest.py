from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RevokeGrantRequest:
    grant_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantId' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    
