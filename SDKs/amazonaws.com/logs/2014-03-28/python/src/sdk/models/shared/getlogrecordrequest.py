from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetLogRecordRequest:
    log_record_pointer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logRecordPointer') }})
    
