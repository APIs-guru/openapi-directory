from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Occurrences:
    r"""Occurrences
    The detected occurrences of sensitive data.
    """
    
    cells: Optional[List[Cell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cells') }})
    line_ranges: Optional[List[Range]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineRanges') }})
    offset_ranges: Optional[List[Range]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OffsetRanges') }})
    pages: Optional[List[Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pages') }})
    records: Optional[List[Record]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    
