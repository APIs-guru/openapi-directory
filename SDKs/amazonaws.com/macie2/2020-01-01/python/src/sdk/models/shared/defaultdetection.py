from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DefaultDetection:
    r"""DefaultDetection
    Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    occurrences: Optional[Occurrences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
