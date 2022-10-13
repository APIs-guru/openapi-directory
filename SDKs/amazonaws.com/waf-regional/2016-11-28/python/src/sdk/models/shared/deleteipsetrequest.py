from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteIPSetRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    ip_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSetId' }})
    
