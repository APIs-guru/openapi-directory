from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutResolverRulePolicyRequest:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    resolver_rule_policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRulePolicy') }})
    
