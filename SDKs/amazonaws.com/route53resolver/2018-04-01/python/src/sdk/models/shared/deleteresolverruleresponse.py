from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resolverrule


@dataclass_json
@dataclass
class DeleteResolverRuleResponse:
    resolver_rule: Optional[resolverrule.ResolverRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRule' }})
    
