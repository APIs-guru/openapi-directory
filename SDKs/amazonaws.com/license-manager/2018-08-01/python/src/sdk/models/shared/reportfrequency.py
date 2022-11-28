from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportFrequency:
    r"""ReportFrequency
    Details on how frequently reports are generated.
    """
    
    period: Optional[ReportFrequencyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
