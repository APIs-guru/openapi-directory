from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentityProviderDetails:
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    invocation_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationRole' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
