from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import page


@dataclass_json
@dataclass
class ListPagesByEngagementResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    pages: List[page.Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pages' }})
    
