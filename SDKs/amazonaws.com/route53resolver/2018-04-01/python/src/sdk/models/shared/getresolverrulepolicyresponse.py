from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetResolverRulePolicyResponse:
    resolver_rule_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRulePolicy' }})
    
