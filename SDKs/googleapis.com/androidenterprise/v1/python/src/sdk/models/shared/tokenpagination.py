from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TokenPagination:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    previous_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousPageToken' }})
    
