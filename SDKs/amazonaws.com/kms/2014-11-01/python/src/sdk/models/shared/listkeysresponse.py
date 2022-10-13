from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keylistentry


@dataclass_json
@dataclass
class ListKeysResponse:
    keys: Optional[List[keylistentry.KeyListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Truncated' }})
    
