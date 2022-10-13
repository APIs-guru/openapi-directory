from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import record
from . import record


@dataclass_json
@dataclass
class WriteRecordsRequest:
    common_attributes: Optional[record.Record] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommonAttributes' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    records: List[record.Record] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
