from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import listing


@dataclass_json
@dataclass
class GetListingResponse:
    data: listing.Listing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
