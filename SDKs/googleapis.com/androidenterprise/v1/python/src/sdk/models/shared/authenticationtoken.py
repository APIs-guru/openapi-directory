from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthenticationToken:
    r"""AuthenticationToken
    An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.
    """
    
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
