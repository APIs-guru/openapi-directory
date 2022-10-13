from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streamkeysummary


@dataclass_json
@dataclass
class ListStreamKeysResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    stream_keys: List[streamkeysummary.StreamKeySummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamKeys' }})
    
