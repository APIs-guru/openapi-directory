from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnmetadata


@dataclass_json
@dataclass
class DescribeTableResponse:
    column_list: Optional[List[columnmetadata.ColumnMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
