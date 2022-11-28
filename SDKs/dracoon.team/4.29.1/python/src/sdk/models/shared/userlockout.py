from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserLockout:
    r"""UserLockout
    User lockout information
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    lockout_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockoutPeriod') }})
    max_number_of_login_failures: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberOfLoginFailures') }})
    
