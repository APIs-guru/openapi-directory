from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import ipruleitem


@dataclass_json
@dataclass
class CreateIPGroupRequest:
    group_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupDesc' }})
    group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_rules: Optional[List[ipruleitem.IPRuleItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserRules' }})
    
