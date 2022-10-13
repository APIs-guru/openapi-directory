from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ipruleitem


@dataclass_json
@dataclass
class WorkspacesIPGroup:
    group_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupDesc' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    user_rules: Optional[List[ipruleitem.IPRuleItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRules' }})
    
