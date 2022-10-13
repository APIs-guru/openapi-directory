from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listing


@dataclass_json
@dataclass
class ListingsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    listings: Optional[List[listing.Listing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listings' }})
    
