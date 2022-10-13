from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recorddetail


@dataclass_json
@dataclass
class ListRecordHistoryOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    record_details: Optional[List[recorddetail.RecordDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordDetails' }})
    
