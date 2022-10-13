from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listplaceindexesresponseentry


@dataclass_json
@dataclass
class ListPlaceIndexesResponse:
    entries: List[listplaceindexesresponseentry.ListPlaceIndexesResponseEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
