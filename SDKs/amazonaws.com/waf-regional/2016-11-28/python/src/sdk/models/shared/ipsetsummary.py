from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPSetSummary:
    ip_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSetId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
