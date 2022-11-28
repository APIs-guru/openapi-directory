from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PasswordExpiration:
    r"""PasswordExpiration
    Password expiration information
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    max_password_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPasswordAge') }})
    
