from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteWebACLRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    web_acl_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLId' }})
    
