from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import row


@dataclass_json
@dataclass
class ListRowsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    rows: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
