from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wafaction
from . import tag


@dataclass_json
@dataclass
class CreateWebACLRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    default_action: wafaction.WafAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAction' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
