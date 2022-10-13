from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnmetadata
from . import field


@dataclass_json
@dataclass
class GetStatementResultResponse:
    column_metadata: Optional[List[columnmetadata.ColumnMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnMetadata' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    records: List[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    total_num_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalNumRows' }})
    
