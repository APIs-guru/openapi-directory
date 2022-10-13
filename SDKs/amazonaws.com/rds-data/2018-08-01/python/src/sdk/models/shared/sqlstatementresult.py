from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resultframe


@dataclass_json
@dataclass
class SQLStatementResult:
    number_of_records_updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfRecordsUpdated' }})
    result_frame: Optional[resultframe.ResultFrame] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultFrame' }})
    
