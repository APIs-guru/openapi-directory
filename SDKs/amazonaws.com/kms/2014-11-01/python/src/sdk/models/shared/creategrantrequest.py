from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGrantRequest:
    grantee_principal: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteePrincipal') }})
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    operations: List[GrantOperationEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    constraints: Optional[GrantConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Constraints') }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    retiring_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetiringPrincipal') }})
    
