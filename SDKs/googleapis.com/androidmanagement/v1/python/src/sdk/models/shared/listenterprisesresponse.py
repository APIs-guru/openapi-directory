from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprise


@dataclass_json
@dataclass
class ListEnterprisesResponse:
    enterprises: Optional[List[enterprise.Enterprise]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterprises' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
