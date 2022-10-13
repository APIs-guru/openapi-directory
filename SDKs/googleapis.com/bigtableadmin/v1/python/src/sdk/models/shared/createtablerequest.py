from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import split
from . import table


@dataclass_json
@dataclass
class CreateTableRequest:
    initial_splits: Optional[List[split.Split]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialSplits' }})
    table: Optional[table.Table] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    
