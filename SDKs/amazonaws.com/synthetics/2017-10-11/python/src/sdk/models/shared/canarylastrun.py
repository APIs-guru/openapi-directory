from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CanaryLastRun:
    r"""CanaryLastRun
    This structure contains information about the most recent run of a single canary.
    """
    
    canary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanaryName') }})
    last_run: Optional[CanaryRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRun') }})
    
