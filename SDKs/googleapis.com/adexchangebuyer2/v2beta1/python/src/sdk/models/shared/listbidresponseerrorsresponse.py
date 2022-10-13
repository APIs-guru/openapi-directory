from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import calloutstatusrow


@dataclass_json
@dataclass
class ListBidResponseErrorsResponse:
    callout_status_rows: Optional[List[calloutstatusrow.CalloutStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calloutStatusRows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
