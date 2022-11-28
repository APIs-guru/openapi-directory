from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeScanningAlertLocation:
    r"""CodeScanningAlertLocation
    Describe a region within a file for the alert.
    """
    
    end_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_column') }})
    end_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_line') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_column') }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    
