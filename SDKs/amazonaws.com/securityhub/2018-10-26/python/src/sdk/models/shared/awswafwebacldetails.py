from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awswafwebaclrule


@dataclass_json
@dataclass
class AwsWafWebACLDetails:
    default_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rules: Optional[List[awswafwebaclrule.AwsWafWebACLRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    web_acl_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebAclId' }})
    
