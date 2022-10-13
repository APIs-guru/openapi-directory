from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteByteMatchSetRequest:
    byte_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByteMatchSetId' }})
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    
