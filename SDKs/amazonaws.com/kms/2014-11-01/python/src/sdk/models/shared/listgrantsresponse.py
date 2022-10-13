from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grantlistentry


@dataclass_json
@dataclass
class ListGrantsResponse:
    grants: Optional[List[grantlistentry.GrantListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Grants' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Truncated' }})
    
