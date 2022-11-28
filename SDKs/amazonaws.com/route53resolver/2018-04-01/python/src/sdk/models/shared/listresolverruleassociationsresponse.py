from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListResolverRuleAssociationsResponse:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resolver_rule_associations: Optional[List[ResolverRuleAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRuleAssociations') }})
    
