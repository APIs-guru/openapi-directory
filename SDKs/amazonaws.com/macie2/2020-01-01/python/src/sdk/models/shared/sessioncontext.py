from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SessionContext:
    r"""SessionContext
    Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
    """
    
    attributes: Optional[SessionContextAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    session_issuer: Optional[SessionIssuer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionIssuer') }})
    
