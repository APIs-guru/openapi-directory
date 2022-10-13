from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import formtabledefinition
from . import tablerowresult


@dataclass_json
@dataclass
class TableResult:
    table_definition: Optional[formtabledefinition.FormTableDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableDefinition' }})
    table_rows_result: Optional[List[tablerowresult.TableRowResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableRowsResult' }})
    
