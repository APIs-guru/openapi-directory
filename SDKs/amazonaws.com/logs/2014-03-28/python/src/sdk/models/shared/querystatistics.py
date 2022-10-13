from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryStatistics:
    bytes_scanned: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesScanned' }})
    records_matched: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordsMatched' }})
    records_scanned: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordsScanned' }})
    
