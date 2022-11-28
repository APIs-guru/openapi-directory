from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutomotivePartsCompatibilityPolicyResponse:
    automotive_parts_compatibility_policies: Optional[List[AutomotivePartsCompatibilityPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automotivePartsCompatibilityPolicies') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
