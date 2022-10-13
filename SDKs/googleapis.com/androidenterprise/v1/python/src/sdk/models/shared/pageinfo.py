from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PageInfo:
    result_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultPerPage' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
