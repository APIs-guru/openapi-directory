from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import standardsqlfield


@dataclass_json
@dataclass
class StandardSQLTableType:
    columns: Optional[List[standardsqlfield.StandardSQLField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    
