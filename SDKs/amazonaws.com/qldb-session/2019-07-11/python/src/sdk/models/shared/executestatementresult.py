from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteStatementResult:
    r"""ExecuteStatementResult
    Contains the details of the executed statement.
    """
    
    consumed_i_os: Optional[IoUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedIOs') }})
    first_page: Optional[Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPage') }})
    timing_information: Optional[TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    
