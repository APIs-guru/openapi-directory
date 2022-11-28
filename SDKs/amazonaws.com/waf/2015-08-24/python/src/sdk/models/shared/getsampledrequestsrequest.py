from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSampledRequestsRequest:
    max_items: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxItems') }})
    rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    time_window: TimeWindow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeWindow') }})
    web_acl_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebAclId') }})
    
