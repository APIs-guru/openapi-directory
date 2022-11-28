from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomDetection:
    r"""CustomDetection
    Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    occurrences: Optional[Occurrences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    
