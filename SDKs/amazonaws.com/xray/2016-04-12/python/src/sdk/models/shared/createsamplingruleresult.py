from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import samplingrulerecord


@dataclass_json
@dataclass
class CreateSamplingRuleResult:
    sampling_rule_record: Optional[samplingrulerecord.SamplingRuleRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamplingRuleRecord' }})
    
