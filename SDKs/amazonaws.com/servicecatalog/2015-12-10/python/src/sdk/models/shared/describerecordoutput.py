from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recorddetail
from . import recordoutput


@dataclass_json
@dataclass
class DescribeRecordOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    record_detail: Optional[recorddetail.RecordDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordDetail' }})
    record_outputs: Optional[List[recordoutput.RecordOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordOutputs' }})
    
