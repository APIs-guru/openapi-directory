from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebACLSummary:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    web_acl_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLId' }})
    
