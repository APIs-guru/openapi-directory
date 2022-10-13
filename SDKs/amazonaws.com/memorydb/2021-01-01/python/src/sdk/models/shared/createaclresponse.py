from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import acl


@dataclass_json
@dataclass
class CreateACLResponse:
    acl: Optional[acl.ACL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACL' }})
    
