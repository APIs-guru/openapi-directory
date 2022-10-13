from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import timewindow


@dataclass_json
@dataclass
class GetSampledRequestsRequest:
    max_items: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxItems' }})
    rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    time_window: timewindow.TimeWindow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeWindow' }})
    web_acl_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebAclId' }})
    
