from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import listing


@dataclass_json
@dataclass
class ListingRespPaginated:
    listings: List[listing.Listing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listings' }})
    max_pages: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPages' }})
    page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
