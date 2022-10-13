from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iousage
from . import page
from . import timinginformation


@dataclass_json
@dataclass
class ExecuteStatementResult:
    consumed_i_os: Optional[iousage.IoUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedIOs' }})
    first_page: Optional[page.Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPage' }})
    timing_information: Optional[timinginformation.TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimingInformation' }})
    
