from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import search_line


@dataclass_json
@dataclass
class SearchContentMatch:
    lines: Optional[List[search_line.SearchLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    
