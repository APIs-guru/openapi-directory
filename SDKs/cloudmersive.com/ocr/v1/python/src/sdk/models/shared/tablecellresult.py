from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableCellResult:
    r"""TableCellResult
    The recognition result of one cell in one row in a table of a form
    """
    
    cell_values: Optional[List[OcrPhotoTextElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CellValues') }})
    column_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnID') }})
    
