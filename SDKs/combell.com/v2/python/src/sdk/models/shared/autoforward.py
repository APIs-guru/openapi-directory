from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoForward:
    copy_to_myself: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy_to_myself') }})
    email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_addresses') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
