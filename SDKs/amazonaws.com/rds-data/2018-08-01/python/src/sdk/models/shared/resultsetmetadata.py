from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnmetadata


@dataclass_json
@dataclass
class ResultSetMetadata:
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnCount' }})
    column_metadata: Optional[List[columnmetadata.ColumnMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnMetadata' }})
    
