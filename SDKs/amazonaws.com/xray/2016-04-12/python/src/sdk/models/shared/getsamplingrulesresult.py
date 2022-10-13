from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import samplingrulerecord


@dataclass_json
@dataclass
class GetSamplingRulesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sampling_rule_records: Optional[List[samplingrulerecord.SamplingRuleRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamplingRuleRecords' }})
    
