from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import group


@dataclass_json
@dataclass
class Groups:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    groups: Optional[List[group.Group]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
