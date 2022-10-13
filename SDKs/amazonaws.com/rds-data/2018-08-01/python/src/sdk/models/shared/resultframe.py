from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import record
from . import resultsetmetadata


@dataclass_json
@dataclass
class ResultFrame:
    records: Optional[List[record.Record]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    result_set_metadata: Optional[resultsetmetadata.ResultSetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultSetMetadata' }})
    
