from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account


@dataclass_json
@dataclass
class Accounts:
    items: Optional[List[account.Account]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerPage' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextLink' }})
    previous_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousLink' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
