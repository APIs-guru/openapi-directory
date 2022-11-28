from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrantAccessResult:
    r"""GrantAccessResult
    Contains the response to a <code>GrantAccess</code> request.
    """
    
    temporary_credential: Optional[TemporaryCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemporaryCredential') }})
    
