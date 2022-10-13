from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablecellresult


@dataclass_json
@dataclass
class TableRowResult:
    table_row_cells_result: Optional[List[tablecellresult.TableCellResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableRowCellsResult' }})
    
