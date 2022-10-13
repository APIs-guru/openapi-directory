from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import bytematchsetupdate


@dataclass_json
@dataclass
class UpdateByteMatchSetRequest:
    byte_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByteMatchSetId' }})
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    updates: List[bytematchsetupdate.ByteMatchSetUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
