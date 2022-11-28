from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListManagedPoliciesInPermissionSetResponse:
    attached_managed_policies: Optional[List[AttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
