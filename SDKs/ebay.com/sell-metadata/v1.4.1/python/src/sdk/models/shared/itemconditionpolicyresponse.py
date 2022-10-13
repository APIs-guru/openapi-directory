from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import itemconditionpolicy
from . import error


@dataclass_json
@dataclass
class ItemConditionPolicyResponse:
    item_condition_policies: Optional[List[itemconditionpolicy.ItemConditionPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemConditionPolicies' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
