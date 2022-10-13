from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resolverruleconfig


@dataclass_json
@dataclass
class UpdateResolverRuleRequest:
    config: resolverruleconfig.ResolverRuleConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Config' }})
    resolver_rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRuleId' }})
    
