from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IdentityInfo:
    r"""IdentityInfo
    Information about an email identity.
    """
    
    identity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityName') }})
    identity_type: Optional[IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    sending_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingEnabled') }})
    
