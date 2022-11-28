from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Cell:
    r"""Cell
    An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.
    """
    
    cell_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CellReference') }})
    column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Column') }})
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnName') }})
    row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Row') }})
    
