from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SSHKey:
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    
