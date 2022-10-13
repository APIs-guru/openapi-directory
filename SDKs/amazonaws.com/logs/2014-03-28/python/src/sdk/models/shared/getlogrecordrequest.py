from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetLogRecordRequest:
    log_record_pointer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logRecordPointer' }})
    
