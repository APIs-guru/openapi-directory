from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateACLRequest:
    acl_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLName' }})
    user_names_to_add: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserNamesToAdd' }})
    user_names_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserNamesToRemove' }})
    
