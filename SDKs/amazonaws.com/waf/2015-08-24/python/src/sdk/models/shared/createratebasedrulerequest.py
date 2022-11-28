from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRateBasedRuleRequest:
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate_key: RateKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateKey') }})
    rate_limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateLimit') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
