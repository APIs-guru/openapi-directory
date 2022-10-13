from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutResolverRulePolicyRequest:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    resolver_rule_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRulePolicy' }})
    
