from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteSamplingRuleResult:
    sampling_rule_record: Optional[SamplingRuleRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingRuleRecord') }})
    
