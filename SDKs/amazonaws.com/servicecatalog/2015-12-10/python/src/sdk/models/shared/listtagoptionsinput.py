from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listtagoptionsfilters


@dataclass_json
@dataclass
class ListTagOptionsInput:
    filters: Optional[listtagoptionsfilters.ListTagOptionsFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    
