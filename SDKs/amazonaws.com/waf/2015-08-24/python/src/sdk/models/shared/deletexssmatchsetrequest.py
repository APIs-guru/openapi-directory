from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteXSSMatchSetRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    xss_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XssMatchSetId' }})
    
