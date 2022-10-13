from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import creativestatusrow


@dataclass_json
@dataclass
class ListLosingBidsResponse:
    creative_status_rows: Optional[List[creativestatusrow.CreativeStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeStatusRows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
