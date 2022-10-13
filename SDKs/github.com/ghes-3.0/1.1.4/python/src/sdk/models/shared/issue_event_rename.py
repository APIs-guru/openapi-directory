from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssueEventRename:
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
