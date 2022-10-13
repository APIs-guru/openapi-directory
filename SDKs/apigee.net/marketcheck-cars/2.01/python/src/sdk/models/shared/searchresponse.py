from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import baselisting


@dataclass_json
@dataclass
class SearchResponse:
    facets: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    listings: Optional[List[baselisting.BaseListing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listings' }})
    num_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_found' }})
    range_facets: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range_facets' }})
    stats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
