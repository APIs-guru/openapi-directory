from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateACLRequest:
    acl_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserNames' }})
    
