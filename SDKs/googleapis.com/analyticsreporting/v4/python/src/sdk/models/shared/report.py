from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Report:
    r"""Report
    The data response corresponding to the request.
    """
    
    column_header: Optional[ColumnHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeader') }})
    data: Optional[ReportData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
