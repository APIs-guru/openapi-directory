from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetResourcePoliciesOutput:
    resource_policies: List[ResourcePolicy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcePolicies') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
