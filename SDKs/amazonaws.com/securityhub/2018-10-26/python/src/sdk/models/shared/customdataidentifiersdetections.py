from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomDataIdentifiersDetections:
    r"""CustomDataIdentifiersDetections
    The list of detected instances of sensitive data.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    occurrences: Optional[Occurrences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Occurrences') }})
    
