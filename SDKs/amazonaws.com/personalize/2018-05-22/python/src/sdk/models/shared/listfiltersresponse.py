from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filtersummary


@dataclass_json
@dataclass
class ListFiltersResponse:
    filters: Optional[List[filtersummary.FilterSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
