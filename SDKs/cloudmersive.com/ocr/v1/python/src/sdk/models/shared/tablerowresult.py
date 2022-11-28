from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableRowResult:
    r"""TableRowResult
    One row of data in the resulting table
    """
    
    table_row_cells_result: Optional[List[TableCellResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableRowCellsResult') }})
    
