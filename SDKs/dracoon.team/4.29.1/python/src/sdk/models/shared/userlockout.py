from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserLockout:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    lockout_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockoutPeriod' }})
    max_number_of_login_failures: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumberOfLoginFailures' }})
    
