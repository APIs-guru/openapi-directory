from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TraceUser:
    r"""TraceUser
    Information about a user recorded in segment documents.
    """
    
    service_ids: Optional[List[ServiceID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIds') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
