from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SSHKeyDetail:
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    linux_hostings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linux_hostings' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    
