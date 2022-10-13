from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resolverrule


@dataclass_json
@dataclass
class ListResolverRulesResponse:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resolver_rules: Optional[List[resolverrule.ResolverRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRules' }})
    
