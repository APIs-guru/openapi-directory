from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SensitiveDataDetections:
    r"""SensitiveDataDetections
    The list of detected instances of sensitive data.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    occurrences: Optional[Occurrences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Occurrences') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
