from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateResolverRuleRequest:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resolver_rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRuleId' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VPCId' }})
    
