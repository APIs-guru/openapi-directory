from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import member


@dataclass_json
@dataclass
class Members:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    members: Optional[List[member.Member]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
