from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportFooter:
    r"""ReportFooter
    Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
    """
    
    matching_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingRowCount') }})
    warnings: Optional[List[ReportWarning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
