from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resolverruleassociation


@dataclass_json
@dataclass
class AssociateResolverRuleResponse:
    resolver_rule_association: Optional[resolverruleassociation.ResolverRuleAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverRuleAssociation' }})
    
