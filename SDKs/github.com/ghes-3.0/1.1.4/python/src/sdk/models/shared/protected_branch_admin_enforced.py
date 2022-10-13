from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProtectedBranchAdminEnforced:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
