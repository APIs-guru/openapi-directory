from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchResult:
    context: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    context_after: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context_after' }})
    context_before: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context_before' }})
    line: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    package: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
