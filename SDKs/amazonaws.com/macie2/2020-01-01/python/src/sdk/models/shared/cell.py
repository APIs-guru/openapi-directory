from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Cell:
    r"""Cell
    Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
    """
    
    cell_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellReference') }})
    column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnName') }})
    row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
