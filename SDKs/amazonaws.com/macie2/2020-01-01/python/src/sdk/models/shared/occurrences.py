from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Occurrences:
    r"""Occurrences
    Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.
    """
    
    cells: Optional[List[Cell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    line_ranges: Optional[List[Range]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineRanges') }})
    offset_ranges: Optional[List[Range]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetRanges') }})
    pages: Optional[List[Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    records: Optional[List[Record]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    
