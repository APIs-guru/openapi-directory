from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApigatewayBinding:
    r"""ApigatewayBinding
    Associates `members` with a `role`.
    """
    
    condition: Optional[ApigatewayExpr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
