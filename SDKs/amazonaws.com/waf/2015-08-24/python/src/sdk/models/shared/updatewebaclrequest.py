from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wafaction
from . import webaclupdate


@dataclass_json
@dataclass
class UpdateWebACLRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    default_action: Optional[wafaction.WafAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAction' }})
    updates: Optional[List[webaclupdate.WebACLUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    web_acl_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLId' }})
    
