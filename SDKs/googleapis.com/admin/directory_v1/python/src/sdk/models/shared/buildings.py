from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import building


@dataclass_json
@dataclass
class Buildings:
    buildings: Optional[List[building.Building]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
