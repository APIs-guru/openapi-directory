from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AcLsUpdateStatus:
    acl_to_apply: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLToApply' }})
    
