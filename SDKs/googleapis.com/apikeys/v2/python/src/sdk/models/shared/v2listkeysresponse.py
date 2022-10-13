from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v2key


@dataclass_json
@dataclass
class V2ListKeysResponse:
    keys: Optional[List[v2key.V2Key]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
