from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountmodification


@dataclass_json
@dataclass
class DescribeAccountModificationsResult:
    account_modifications: Optional[List[accountmodification.AccountModification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountModifications' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
