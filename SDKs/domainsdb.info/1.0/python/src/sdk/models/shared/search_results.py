from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domains


@dataclass_json
@dataclass
class SearchResults:
    domains: Optional[List[domains.Domains]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    next_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
