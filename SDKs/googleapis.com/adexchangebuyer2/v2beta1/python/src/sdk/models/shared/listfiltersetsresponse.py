from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filterset


@dataclass_json
@dataclass
class ListFilterSetsResponse:
    filter_sets: Optional[List[filterset.FilterSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterSets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
