from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import valueholder


@dataclass_json
@dataclass
class Page:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    values: Optional[List[valueholder.ValueHolder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
