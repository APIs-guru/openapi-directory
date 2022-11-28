from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TermsAndConditions:
    r"""TermsAndConditions
    A terms and conditions page to be accepted during provisioning.
    """
    
    content: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    header: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    
