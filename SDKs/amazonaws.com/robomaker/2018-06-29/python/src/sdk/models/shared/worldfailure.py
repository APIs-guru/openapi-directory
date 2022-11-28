from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorldFailure:
    r"""WorldFailure
    Information about a failed world.
    """
    
    failure_code: Optional[WorldGenerationJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCount') }})
    sample_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleFailureReason') }})
    
