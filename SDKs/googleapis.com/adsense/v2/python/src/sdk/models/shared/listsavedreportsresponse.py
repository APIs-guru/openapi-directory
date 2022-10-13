from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import savedreport


@dataclass_json
@dataclass
class ListSavedReportsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    saved_reports: Optional[List[savedreport.SavedReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savedReports' }})
    
