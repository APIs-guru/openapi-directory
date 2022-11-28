from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWebACLRequest:
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    default_action: WafAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAction') }})
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
