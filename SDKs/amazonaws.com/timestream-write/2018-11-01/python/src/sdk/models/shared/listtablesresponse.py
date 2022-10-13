from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import table


@dataclass_json
@dataclass
class ListTablesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    tables: Optional[List[table.Table]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tables' }})
    
