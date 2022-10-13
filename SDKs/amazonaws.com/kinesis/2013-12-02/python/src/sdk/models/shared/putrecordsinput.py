from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import putrecordsrequestentry


@dataclass_json
@dataclass
class PutRecordsInput:
    records: List[putrecordsrequestentry.PutRecordsRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
