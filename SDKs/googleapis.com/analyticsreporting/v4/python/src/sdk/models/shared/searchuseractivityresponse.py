from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import useractivitysession


@dataclass_json
@dataclass
class SearchUserActivityResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sample_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleRate' }})
    sessions: Optional[List[useractivitysession.UserActivitySession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    total_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRows' }})
    
