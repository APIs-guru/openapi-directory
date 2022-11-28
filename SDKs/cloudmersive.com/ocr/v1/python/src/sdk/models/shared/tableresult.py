from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableResult:
    r"""TableResult
    The result of reading a table via OCR from a form
    """
    
    table_definition: Optional[FormTableDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableDefinition') }})
    table_rows_result: Optional[List[TableRowResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableRowsResult') }})
    
