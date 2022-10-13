from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesscontrolrule


@dataclass_json
@dataclass
class ListAccessControlRulesResponse:
    rules: Optional[List[accesscontrolrule.AccessControlRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
