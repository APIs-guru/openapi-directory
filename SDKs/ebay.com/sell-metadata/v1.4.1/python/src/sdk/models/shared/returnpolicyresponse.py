from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import returnpolicy
from . import error


@dataclass_json
@dataclass
class ReturnPolicyResponse:
    return_policies: Optional[List[returnpolicy.ReturnPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicies' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
