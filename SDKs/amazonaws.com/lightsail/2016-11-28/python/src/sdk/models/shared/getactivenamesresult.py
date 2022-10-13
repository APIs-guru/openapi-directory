from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetActiveNamesResult:
    active_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeNames' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
