from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wafaction
from . import activatedrule


@dataclass_json
@dataclass
class WebACL:
    default_action: wafaction.WafAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAction' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rules: List[activatedrule.ActivatedRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    web_acl_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLArn' }})
    web_acl_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLId' }})
    
