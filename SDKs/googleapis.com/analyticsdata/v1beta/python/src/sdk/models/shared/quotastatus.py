from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuotaStatus:
    r"""QuotaStatus
    Current state for a particular quota group.
    """
    
    consumed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumed') }})
    remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    
